/* eslint-disable prefer-destructuring */
import { EMAIL } from '../constants';
import { toggleMenuListener } from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import changeHeaderVisibility from '../menuAnimation';
import getScrollPosition from '../getScrollPosition';
import setFooterYear from '../year';
import Validator from '../validator';

let scrollPreviousPosition = 0;
let hash;

const validationScheme = {
  name: [
    { required: true, message: 'The field is required' },
    { pattern: /[\W\w]{2,}\s*/, message: 'Please enter your full name' }
  ],
  email: [
    { required: true, message: 'The field is required' },
    {
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'Please enter a valid e-mail address'
    }
  ],
  phone: [{ pattern: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/, message: 'Please enter a valid phone number' }],
  body: [
    { required: true, message: 'The field is required' },
    { pattern: /[\W\w]{10,}\s*/, message: 'Please provide us with more information' }
  ],
  'collecting-data': [{ type: 'checkbox', required: true, message: "Please check in the box if you'd like to proceed" }]
};

window.addEventListener('scroll', () => {
  const scrolled = getScrollPosition();

  changeHeaderVisibility(scrollPreviousPosition, scrolled);
  scrollPreviousPosition = scrolled;
});

window.onpageshow = event => {
  if (event.persisted) {
    window.location.reload();
  }
};

window.onload = () => {
  window.axios(`${EMAIL.SERVER_URL}/hash`).then(({ data = {} } = {}) => {
    hash = data.hash;
  });

  toggleMenuListener();
  hoverLinkInMenu();
  setFooterYear();

  const form = document.querySelector('#contact-form');

  const validator = new Validator('#contact-form .validation-field', validationScheme);
  validator.validateInputChange();

  form.onsubmit = event => {
    event.preventDefault();
    const submitStatus = form.querySelector('.form-submit-status');
    submitStatus.removeAttribute('style');
    submitStatus.setAttribute('aria-hidden', 'true');

    const isValidForm = validator.validateFormFields();

    if (isValidForm) {
      const submitProgress = form.querySelector('.custom-button div[role="status"]');
      const submitBtnText = form.querySelector('.custom-button .custom-button-inner');
      const submitBtn = form.querySelector('.custom-button');
      const email = form.querySelector('input[name="email"]');
      const name = form.querySelector('input[name="name"]');
      const phone = form.querySelector('input[name="phone"]');
      const agreeToCollectData = form.querySelector('input[name="collecting-data"]');
      const description = form.querySelector('textarea[name="body"]');
      const subject = `Adcubex request from ${name.value}`;
      const body = `Email: ${email.value}\n${phone.value ? `Phone: ${phone.value}\n` : ''}\n${description.value}`;

      const showProgress = flag => {
        submitProgress.setAttribute('aria-hidden', `${!flag}`);
        submitProgress.style.display = flag ? 'flex' : 'none';

        submitBtnText.setAttribute('aria-hidden', `${flag}`);
        submitBtnText.style.display = flag ? 'none' : 'flex';

        [name, email, phone, description, submitBtn, agreeToCollectData].forEach(field => {
          field.disabled = flag;
        });
      };

      showProgress(true);
      window
        .axios({
          method: 'post',
          url: `${EMAIL.SERVER_URL}/sendMail`,
          headers: {
            Authorization: hash
          },
          data: {
            from: email.value,
            subject,
            body
          }
        })
        .then(() => {
          showProgress(false);

          form.reset();
          submitStatus.style.display = 'block';
          submitStatus.setAttribute('aria-hidden', 'false');
        })
        .catch(() => {
          showProgress(false);
          window.open(`mailto:${EMAIL.ADDRESS}?subject=${subject}&body=${body}`, '_blank');
        });
    }
  };
};

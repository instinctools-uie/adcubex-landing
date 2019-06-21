import { EMAIL } from '../constants';
import { toggleMenuListener } from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import changeHeaderVisibility from '../menuAnimation';
import getScrollPosition from '../getScrollPosition';
import setFooterYear from '../year';
import { validateInput, validateFormFields, removeError } from '../inputValidator';

let scrollPreviousPosition = 0;

window.addEventListener('scroll', () => {
  const scrolled = getScrollPosition();

  changeHeaderVisibility(scrollPreviousPosition, scrolled);
  scrollPreviousPosition = scrolled;
});

window.onload = () => {
  toggleMenuListener();
  hoverLinkInMenu();
  setFooterYear();

  const form = document.querySelector('#contact-form');
  const inputFields = form.querySelectorAll('.field');
  let isValidForm = true;

  inputFields.forEach(field => {
    field.addEventListener('change', () => {
      isValidForm = validateInput(field);
    });
  });

  form.onsubmit = event => {
    event.preventDefault();

    const errorItemsList = form.querySelectorAll('.error-message');
    const email = form.querySelector('input[name="email"]');
    const name = form.querySelector('input[name="name"]');

    errorItemsList.forEach(item => {
      removeError(item.previousElementSibling);
    });
    isValidForm = validateFormFields(inputFields) && isValidForm;

    if (!isValidForm) {
      return;
    }

    if (window.Email /* instance of smtpjs */) {
      const submitStatus = form.querySelector('.form-submit-status');
      const submitProgress = form.querySelector('.custom-button div[role="status"]');
      const submitBtnText = form.querySelector('.custom-button .custom-button-inner');
      const submitBtn = form.querySelector('.custom-button');
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
          data: {
            from: email.value,
            subject,
            body
          },
          withCredentials: true
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

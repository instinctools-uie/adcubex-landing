import { EMAIL } from '../constants';
import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import changeHeaderVisibility from '../menuAnimation';
import getScrollPosition from '../getScrollPosition';

let scrollPreviousPosition = 0;

toggleMenu();
hoverLinkInMenu();

window.addEventListener('scroll', () => {
  const scrolled = getScrollPosition();

  changeHeaderVisibility(scrollPreviousPosition, scrolled);
  scrollPreviousPosition = scrolled;
});

window.onload = () => {
  const form = document.querySelector('#contact-form');

  form.onsubmit = event => {
    event.preventDefault();

    if (window.Email /* instance of smtpjs */) {
      const submitStatus = form.querySelector('.form-submit-status');
      const submitProgress = form.querySelector('.custom-button div[role="status"]');
      const submitBtnText = form.querySelector('.custom-button .custom-button-inner');
      const submitBtn = form.querySelector('.custom-button');
      const email = form.querySelector('input[name="email"]');
      const name = form.querySelector('input[name="name"]');
      const phone = form.querySelector('input[name="phone"]');
      const agreeToCollectData = form.querySelector('input[name="collecting-data"]');
      const body = form.querySelector('textarea[name="body"]');
      const subject = `Adcubex request from ${name.value} (email:${email.value}${phone.value
        ? `, tel:${phone.value}`
        : ''})`;
      const showProgress = flag => {
        submitProgress.setAttribute('aria-hidden', `${!flag}`);
        submitProgress.style.display = flag ? 'flex' : 'none';

        submitBtnText.setAttribute('aria-hidden', `${flag}`);
        submitBtnText.style.display = flag ? 'none' : 'flex';

        [name, email, phone, body, submitBtn, agreeToCollectData].forEach(field => {
          field.disabled = flag;
        });
      };

      showProgress(true);
      window.Email
        .send({
          SecureToken: EMAIL.TOKEN,
          To: EMAIL.ADDRESS,
          From: email.value,
          Subject: subject,
          Body: body.value
        })
        .then(msg => {
          showProgress(false);

          if (msg && msg.toLowerCase().includes('fail')) {
            window.open(`mailto:${EMAIL.ADDRESS}?subject=${subject}&body=${body.value}`, '_blank');
          }

          form.reset();
          submitStatus.style.display = 'block';
          submitStatus.setAttribute('aria-hidden', 'false');
        })
        .catch(() => {
          showProgress(false);
          window.open(`mailto:${EMAIL.ADDRESS}?subject=${subject}&body=${body.value}`, '_blank');
        });
    }
  };
};

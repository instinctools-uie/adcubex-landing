import { EMAIL } from '../constants';
import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import changeHeaderVisibility from '../menuAnimation';

let scrollPreviousPosition = 0;

toggleMenu();
hoverLinkInMenu();

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;

  changeHeaderVisibility(scrollPreviousPosition, scrolled);
  scrollPreviousPosition = scrolled;
});

window.onload = () => {
  function showProgress(flag) {
    const progress = document.querySelector('div[role="progressbar"]');
    if (progress) {
      progress.setAttribute('aria-hidden', `${!flag}`);
      progress.style.display = flag ? 'flex' : 'none';
    }
  }

  const form = document.querySelector('#contact-form');
  form.onsubmit = event => {
    event.preventDefault();

    if (window.Email /* instance of smtpjs */) {
      const status = document.querySelector('.form-submit-status');
      const email = form.querySelector('input[name="email"]').value;
      const name = form.querySelector('input[name="name"]').value;
      const phone = form.querySelector('input[name="phone"]').value;
      const body = form.querySelector('textarea[name="body"]').value;
      const subject = `Adcubex request from ${name} (email:${email}${phone ? `, tel:${phone}` : ''})`;

      showProgress(true);
      window.Email
        .send({
          SecureToken: EMAIL.TOKEN,
          To: EMAIL.ADDRESS,
          From: email,
          Subject: subject,
          Body: body
        })
        .then(msg => {
          showProgress(false);
          if (msg && msg.toLowerCase().includes('fail')) {
            window.open(`mailto:${EMAIL.ADDRESS}?subject=${subject}&body=${body}`, '_blank');
          }

          form.reset();
          status.style.display = 'block';
          status.setAttribute('aria-hidden', 'false');
        })
        .catch(() => {
          showProgress(false);
          window.open(`mailto:${EMAIL.ADDRESS}?subject=${subject}&body=${body}`, '_blank');
        });
    }
  };
};

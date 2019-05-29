import { EMAIL } from '../constants';
import toggleMenu from '../toggleMenu';
import hoverLinkInMenu from '../hoverLinkInMenu';
import toggleCheckbox from './checkboxHandler';
import changeHeaderVisibility from '../menuAnimation';

let scrollPreviousPosition = 0;

toggleMenu();
toggleCheckbox();
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
      progress.setAttribute('aria-hidden', flag);
      progress.style.display = flag ? 'flex' : 'none';
    }
  }

  function fallback(subject, body, error) {
    console.log('Request was failed. Will run fallback');
    console.error(error);
    window.open(`mailto:${EMAIL.ADDRESS}?subject=${subject}&body=${body}`, '_blank');
  }

  const form = document.querySelector('#contact-form');
  form.onsubmit = (event) => {
    event.preventDefault();

    if (window.Email /* instance of smtpjs */) {
      const email = form.querySelector('input[name="email"]').value;
      const name = form.querySelector('input[name="name"]').value;
      const phone = form.querySelector('input[name="phone"]').value;
      const body = form.querySelector('textarea[name="body"]').value;
      const subject = `Adcubex request from ${name} (email:${email}${phone ? `, tel:${phone}` : ''})`;
      const fb = fallback.bind(null, subject, body);

      showProgress(true);
      window.Email.send({
        SecureToken: EMAIL.TOKEN,
        To : EMAIL.ADDRESS,
        From : email,
        Subject : subject,
        Body : body
      }).then(
        (msg) => {
          showProgress(false);
          if (msg && msg.toLowerCase().includes('fail')) {
            fb(msg);
          }
        }
      ).catch(error => {
        showProgress(true);
        fb(error);
      });
    }
  };
};

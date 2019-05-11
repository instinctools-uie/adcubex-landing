const checkboxWrapper = document.querySelector('.checkbox-wrapper');
const checkbox = document.querySelector('.fake-checkbox');
const trueCheckbox = document.querySelector('input[type="checkbox"]');
const checkboxLabel = document.querySelector('label');
const checkboxImg = document.querySelector('.contact-checkbox > div > img');

export default function checkboxListener() {
  checkboxWrapper.addEventListener('click', checkboxHandler);
  checkboxLabel.addEventListener('click', checkboxHandler);
}

function checkboxHandler() {
  if (checkbox.classList.contains('fake-checkbox_unchecked') && checkboxImg.classList.contains('img_hide')) {
    checkbox.classList.remove('fake-checkbox_unchecked');
    checkbox.classList.add('fake-checkbox_checked');

    checkboxImg.classList.remove('img_hide');
    checkboxImg.classList.add('img_show');

    trueCheckbox.setAttribute('checked', 'checked');
  } else {
    checkbox.classList.remove('fake-checkbox_checked');
    checkbox.classList.add('fake-checkbox_unchecked');

    checkboxImg.classList.remove('img_show');
    checkboxImg.classList.add('img_hide');

    trueCheckbox.removeAttribute('checked');
  }
}

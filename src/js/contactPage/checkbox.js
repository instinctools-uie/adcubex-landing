const checkbox = document.querySelectorAll('.fake-checkbox');
const checkboxImg = document.querySelectorAll('.contact-checkbox > img');

checkbox.addEventListener('click', () =>  {
  checkbox.classList.toggle('fake-checkbox_unchecked');
  checkbox.classList.toggle('fake-checkbox_checked');

  checkboxImg.classList.toggle('img_hide');
  checkboxImg.classList.toggle('img_show');
});

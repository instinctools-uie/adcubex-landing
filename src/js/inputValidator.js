/**
 * Get sibling element from any position in common container
 * @param {Node} element
 * @param {String} className
 * @returns {Node} - children element
 */
function getSiblingElementByClassName(element, className) {
  const parentContainer = element.parentNode;

  return parentContainer.querySelector(className);
}

/**
 * Create error, add styles for input field
 * @param {Node} targetField - input field
 * @param {String} message
 */
function createError(targetField, message) {
  const error = getSiblingElementByClassName(targetField, '.error-message');
  targetField.style.outline = '0.09em solid var(--flamingo-color)';
  targetField.style.borderColor = 'transparent';
  error.innerHTML = message;
  error.style.display = 'block';
  error.setAttribute('aria-hidden', 'false');
}

/**
 * Remove error
 * @param {Node} targetField - input field
 */
export function removeError(targetField) {
  const parentContainer = targetField.parentNode;
  const error = parentContainer.querySelector('.error-message');
  targetField.removeAttribute('style');
  error.innerHTML = '';
  error.style.display = 'none';
  error.setAttribute('aria-hidden', 'true');
}

/**
 *  Validate of input field
 *  @param {Node} inputField - input field
 *  @returns {Boolean} - flag for interrupt
 */
export function validateInput(inputField) {
  const isRequired = inputField.dataset.required === 'true';
  const isCheckbox = inputField.getAttribute('type') === 'checkbox';
  const ruleType = inputField.dataset.rule;
  const inputValue = inputField.value;
  const validationRules = {
    string: {
      regex: /[\W\w]{2,}\s*/,
      message: 'The field must at least 2 characters'
    },
    text: {
      regex: /[\W\w]{10,}\s*/,
      message: 'The field must at least 10 characters'
    },
    email: {
      regex: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
      message: 'The field must contain a valid email'
    },
    phone: {
      regex: /^[+]{0,1}[0-9]{1,4}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      message: 'The field must contain a valid phone'
    }
  };

  if (isCheckbox && isRequired && !inputField.checked) {
    createError(inputField, '');
    return false;
  }

  if (!isCheckbox && inputValue && !validationRules[ruleType].regex.test(inputValue)) {
    // must be container for error message after input
    createError(inputField, validationRules[ruleType].message);
    return false;
  }

  if (!isCheckbox && isRequired && !inputField.value) {
    // must be container for error message after input
    createError(inputField, 'field is required!');
    return false;
  }

  removeError(inputField);

  return true;
}

/**
 * Validation of list inputs
 * @param {Node} inputFields - node list of field items
 * @returns {boolean|(Boolean|boolean)}
 */
export function validateFormFields(inputFields) {
  let isValidFields = true;

  for (let i = 0; i < inputFields.length; i++) {
    isValidFields = validateInput(inputFields[i]) && isValidFields;
  }
  return isValidFields;
}

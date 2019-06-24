/**
 * Form field validator
 */
export default class Validator {
  constructor(formSelector, fieldsSelector, validationScheme) {
    this.formSelector = formSelector;
    this.fieldsSelector = fieldsSelector;
    this.validationScheme = validationScheme;
    this.errorMessageClass = 'error-message';
    this.errorInputClass = 'not-valid-input';
    this.errorMessageTag = 'SPAN';
    this.checkboxType = 'checkbox';
    this.spanTag = 'span';
  }

  validateInputChange() {
    const inputFields = document.querySelectorAll(`${this.formSelector} ${this.fieldsSelector}`);
    inputFields.forEach(field => field.addEventListener('change', () => {
      const result = this.validateField(field);
      this.handleValidationResult(result);
    }));
  }

  handleValidationResult(result) {
    if (result.error) {
      this.showErrorMessage(result);
    } else {
      this.removeErrorMessage(result);
    }
  }

  validateField(input) {
    const validationScheme = this.validationScheme[input.name];

    const result = { input };

    for (let i = 0; i < validationScheme.length; i++) {
      const scheme = validationScheme[i];
      const value = scheme.type === this.checkboxType ? input.checked : input.value;

      const { required, pattern, message } = scheme;

      if (required && !value) {
        result.error = message || true;
        break;
      }

      if (pattern && !pattern.test(value)) {
        result.error = message || true;
        break;
      }

    }

    return result;
  }

  showErrorMessage({ input, error }) {
    this.removeErrorMessage({ input, error });
    input.classList.add(this.errorInputClass);
    const span = document.createElement(this.spanTag);
    span.innerText = error === true ? '' : error;
    span.setAttribute('class', this.errorMessageClass);
    span.setAttribute('role', 'alert');

    insertAfter(span, input);
  }

  removeErrorMessage({ input, error }) {
    const { nextSibling } = input;
    if (nextSibling &&
      nextSibling.tagName === this.errorMessageTag &&
      nextSibling.className &&
      nextSibling.className.includes(this.errorMessageClass)
    ) {
      nextSibling.remove();

      if (!error) {
        input.classList.remove(this.errorInputClass);
      }
    }
  }

  validateFormFields() {
    const inputFields = document.querySelectorAll(`${this.formSelector} ${this.fieldsSelector}`);
    let isValidForm = true;

    for (let i = 0; i < inputFields.length; i++) {
      const input = inputFields[i];
      const result = this.validateField(input);
      isValidForm && result.error && (isValidForm = false);
      result.error && this.handleValidationResult(result);
    }

    return isValidForm;
  }
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

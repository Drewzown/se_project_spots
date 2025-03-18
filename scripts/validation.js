const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = (formEl, inputElement, errorMessage, config) => {
  const errorMessageEl = formEl.querySelector(`#${inputElement.id}-error`);
  errorMessageEl.textContent = errorMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const hideInputError = (formEl, inputElement, config) => {
  const errorMessageEl = formEl.querySelector(`#${inputElement.id}-error`);
  errorMessageEl.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
};

const checkInputValidity = (formEl, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formEl,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formEl, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, btnElement, config) => {
  if (hasInvalidInput(inputList)) {
    disableButton(btnElement, config);
  } else {
    btnElement.disabled = false;
    btnElement.classList.remove(config.inactiveButtonClass);
  }
};

const disableButton = (btnElement, config) => {
  btnElement.disabled = true;
  btnElement.classList.add(config.inactiveButtonClass);
};

const resetValidation = (formEl, inputList, settings) => {
  inputList.forEach((input) => {
    hideInputError(formEl, input, settings);
  });
};

const setEventListners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const btnElement = formEl.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, btnElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formEl, inputElement, config);
      toggleButtonState(inputList, btnElement, config);
    });
  });
};
const enableValidation = (config) => {
  const formLIST = Array.from(document.querySelectorAll(config.formSelector));
  formLIST.forEach((formEl) => {
    setEventListners(formEl, config);
  });
};

enableValidation(settings);

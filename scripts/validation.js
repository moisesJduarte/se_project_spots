const showInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add("modal__input_type_error");
    errorMsgEl.textContent = errorMsg;

};


const hideInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgEl = formEl.querySelector(`.${inputEl.id}-error`);
    errorMsgEl.textContent = errorMsg;
    inputEl.classList.remove("modal__input_type_error");
};


const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
        hideInputError(formEl, inputEl);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    });
};


const toggleButtonState = (inputList, buttonEl) => {
    if (hasInvalidInput(inputList)) {
        buttonEl.disabled = true;
        buttonEl.classList.add("modal__submit-btn_disabled");

    } else {
        buttonEl.disabled = false;
        buttonEl.classList.remove("modal__submit-btn_disabled");

    }
}


const setEventListeners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__submit-btn");
    // toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formEl, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".modal__form"));
    formList.forEach((formEl) => {
        setEventListeners(formEl);
    });


}

enableValidation();


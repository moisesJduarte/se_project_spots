const setEventListener = (formEl) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".form__submit");

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll("modal__form"));
    formList.forEach((formEl) => {
        setEventListener("formEl");
    });


}

enableValidation();
import { initialCards } from "./cards.js";


const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModal = document.querySelector("#edit-modal");
const editFormElement = document.forms["edit-form"];
const editModalCloseButton = editModal.querySelector(".modal__close-btn");


const { "profile-name-input": editModalNameInput, "profile-description-input": editModalDescriptionInput } = editFormElement.elements;

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");


function openModal() {
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
    editModal.classList.add("modal_opened");
}

function closeModal() {
    editModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescriptionInput.value;
    closeModal();
}

function getCardElement(data) {
    const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
    const cardNameEl = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");

    cardNameEl.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    return cardElement;
}


profileEditButton.addEventListener("click", openModal);
editModalCloseButton.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleEditFormSubmit);


initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsList.append(cardElement);
});
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModal = document.querySelector("#edit-modal");
const editFormElement = document.forms["edit-form"];
const editModalCloseButton = editModal.querySelector(".modal__close-btn");

const editModalNameInput = editFormElement.elements["profile-name-input"];
const editModalDescriptionInput = editFormElement.elements["profile-description-input"];

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

profileEditButton.addEventListener("click", openModal);
editModalCloseButton.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleEditFormSubmit);
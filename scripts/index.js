const initialCards = [
    {
        name: "Golden Gate bridge",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
    },
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
    },
    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    },
    {
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
    },
    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
    },
    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    }
];

// Profile elements
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Modals
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

// Forms
const editProfileForm = document.forms["edit-profile-form"];
const newPostForm = document.forms["new-post-form"];

// Close buttons
const editProfileModalCloseBtn = editProfileModal.querySelector(".modal__close");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close");

// Inputs
const profileNameInput = editProfileForm.elements["profile-name-input"];
const profileDescriptionInput = editProfileForm.elements["profile-description-input"];
const cardTitleInput = newPostForm.elements["card-title-input"];
const cardImageInput = newPostForm.elements["card-image-input"];

// Card template
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

// Add card button
const addCardButton = document.querySelector(".profile__add-btn");

// --- Modal functions ---
function openModal(modal) {
    modal.classList.add("modal_opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_opened");
}

// --- Form handlers ---
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(editProfileModal);
}

function handleNewPostFormSubmit(evt) {
    evt.preventDefault();
    const newCard = getCardElement({
        name: cardTitleInput.value,
        link: cardImageInput.value,
    });
    cardsList.prepend(newCard);
    closeModal(newPostModal);
    newPostForm.reset();
}

// --- Card creation ---
function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardNameEl = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");

    cardNameEl.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    const cardLikeButton = cardElement.querySelector(".card__like-btn");
    cardLikeButton.addEventListener("click", () => {
        cardLikeButton.classList.toggle("card__like-btn_active");
    });

    const cardDeleteButton = cardElement.querySelector(".card__delete-btn");
    cardDeleteButton.addEventListener("click", () => {
        cardElement.remove();
    });



    return cardElement;
}

// --- Render initial cards ---
initialCards.forEach((item) => {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
});

// --- Event listeners ---
// Open Edit Profile modal
profileEditButton.addEventListener("click", () => {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(editProfileModal);
});

// Close Edit Profile modal
editProfileModalCloseBtn.addEventListener("click", () => closeModal(editProfileModal));

// Submit Edit Profile form
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// Open New Post modal
addCardButton.addEventListener("click", () => {
    newPostForm.reset();
    openModal(newPostModal);
});

document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
        const openedModal = document.querySelector(".modal_opened");
        if (openedModal) {
            closeModal(openedModal);
        }
    }
});

// Close New Post modal
newPostModalCloseBtn.addEventListener("click", () => closeModal(newPostModal));

// Submit New Post form
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
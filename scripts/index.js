const initalCards = [
    {
      name: "Val Thorens",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    {
      name: "Restaurant terrace",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
    {
      name: "An outdoor cafe",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
    {
      name: "A very long bridge, over the forest and through the trees",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },
    {
      name: "Tunnel with morning light",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
    {
      name: "Mountain house",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
  ];
  
  const profileEditBtn = document.querySelector(".profile__edit-btn");
  const cardAddBtn = document.querySelector(".profile__add-btn");
  const profileName = document.querySelector(".profile__name");
  const profileDescription = document.querySelector(".profile__description");
  
  const editProfileModal = document.querySelector("#edit-profile-modal");
  const editFormElement = editProfileModal.querySelector(".modal__form");
  const closeProfileModal = editProfileModal.querySelector(".modal__close-btn");
  const editModalNameInput = editProfileModal.querySelector(
    "#profile-name-input"
  );
  const editModalDescriptionInput = editProfileModal.querySelector(
    "#profile-description-input"
  );
  
  const cardModal = document.querySelector("#add-card-modal");
  const cardFormElement = cardModal.querySelector(".modal__form");
  const cardSubmitBtn = cardModal.querySelector(".modal__submit-btn");
  const closeCardModal = cardModal.querySelector(".modal__close-btn");
  const cardNameInput = cardModal.querySelector("#add-card-name-input");
  const cardLinkInput = cardModal.querySelector("#add-card-link-input");
  
  const previewModal = document.querySelector("#preview-modal");
  const previewModalImageEl = previewModal.querySelector(".modal__image");
  const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
  const previewModalClose = previewModal.querySelector(".modal__close-btn");
  
  const cardTemplate = document.querySelector("#card-template");
  const cardsList = document.querySelector(".cards__list");
  
  const modals = document.querySelectorAll(".modal");
  
  function getCardElement(data) {
    const cardElement = cardTemplate.content
      .querySelector(".card")
      .cloneNode(true);
  
    const cardNameEl = cardElement.querySelector(".card__description");
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardLikeBtn = cardElement.querySelector(".card__like-btn");
    const trashButton = cardElement.querySelector(".card__trash-button");
  
    cardNameEl.textContent = data.name;
    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
  
    cardLikeBtn.addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-btn_liked");
    });
  
    trashButton.addEventListener("click", () => {
      cardElement.remove();
    });
  
    cardImageEl.addEventListener("click", () => {
      openModal(previewModal);
      previewModalImageEl.src = data.link;
      previewModalCaptionEl.textContent = data.name;
      previewModalImageEl.alt = data.name;
    });
  
    return cardElement;
  }
  
  function closeEscapeKey() {
      
    if (event.key === "Escape") {
      const escapeModal = document.querySelector(".modal_opened");
     closeModal
    }
  };
  
  
  function closeEscapeKeyListener(closeEscapeKey) {
    document.addEventListener("keyup", (add) );
    
  }
  function openModal(modal) {
    escapeKey(modal);
    modal.classList.add("modal_opened");
  }
  function closeModal(modal) {
    modal.classList.remove("modal_opened");
  
  }
  function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescriptionInput.value;
    closeModal(editProfileModal);
  }
  
  function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const inputValues = {
      name: cardNameInput.value,
      link: cardLinkInput.value,
    };
    const cardElement = getCardElement(inputValues);
    cardsList.prepend(cardElement);
    evt.target.reset();
    disableButton(cardSubmitBtn, settings);
    closeModal(cardModal);
  }
  
  profileEditBtn.addEventListener("click", () => {
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
    resetValidation(formEl, inputList, config)
    openModal(editProfileModal);
  });
  
  
  cardAddBtn.addEventListener("click", () => {
    resetValidation(formEl, inputList, config)
    openModal(cardModal);
  
  });
  
  
  editFormElement.addEventListener("submit", handleEditFormSubmit);
  cardFormElement.addEventListener("submit", handleCardFormSubmit);
  initalCards.forEach((item) => {
    const cardElement = getCardElement(item);
    cardsList.prepend(cardElement);
  });
  
  modals.forEach((modal) => {
    modal.addEventListener("click", (evt) => {
      if(evt.target.classList.contains("modal_opened") || evt.target.classList.contains("modal__close-btn")) {
        closeModal(modal)
      }
    })
  })
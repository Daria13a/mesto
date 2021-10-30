const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupOpenBtn = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');
const popupCloseBtn = profilePopup.querySelector('.popup__close-button');
const popupForm = profilePopup.querySelector('#form-profile');
const nameInput = profilePopup.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const jobInput = profilePopup.querySelector('.popup__input_type_profession');
const profileProfession = document.querySelector('.profile__profession');
const cardAddBtn = document.querySelector('.profile__add-button');
const popupCardAdd = document.querySelector('.popup-card-add');
const popupCardAddCloseBtn = popupCardAdd.querySelector('.popup__close-button');
const popupFormAddCard = popupCardAdd.querySelector('#add-card');
const inputNameCard = popupCardAdd.querySelector('.popup__input_type_title');
const inputUrlCard = popupCardAdd.querySelector('.popup__input_type_url');
const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content;
const popupZoom = document.querySelector('.popup-card-zoom');
const popupZoomCloseBtn = popupZoom.querySelector('.popup__close-button');
const ESC_CODE = 'Escape';

function createCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__caption').textContent = card.name;
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__image').alt = card.name;

  cardElement.querySelector('.element__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  });

  cardElement.querySelector('.element__trash').addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  });

  cardElement.querySelector('.element__image').addEventListener('click', function () {
    openPopup(popupZoom);
    popupZoom.querySelector('.popup-card-zoom__image').src = card.link;
    popupZoom.querySelector('.popup-card-zoom__image').alt = card.name;
    popupZoom.querySelector('.popup-card-zoom__caption').textContent = card.name;
  });
  return cardElement;

};

function addCard(card) {
  const cardElement = createCard(card);

  cardsList.prepend(cardElement);
};

initialCards.forEach(addCard);

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOverlay);
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupOverlay);
};

function closePopupEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(profilePopup);
}

function submitAddCardForm (e) {
  e.preventDefault();
  const newCard = {
    name: inputNameCard.value,
    link: inputUrlCard.value
  };
  closePopup(popupCardAdd);
  addCard(newCard);
  inputNameCard.value = '';
  inputUrlCard.value = '';
};

popupOpenBtn.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;

});

cardAddBtn.addEventListener('click', () => {
  openPopup(popupCardAdd);
  inputNameCard.value = '';
  inputUrlCard.value = '';
  const submitCardAddBtn = popupCardAdd.querySelector('.popup__save-button');
  submitCardAddBtn.classList.add('popup__save-button_inactive');
  submitCardAddBtn.setAttribute("disabled", true);
});

popupCloseBtn.addEventListener('click', () => {
  closePopup(profilePopup);
});

popupCardAddCloseBtn.addEventListener('click', () => {
  closePopup(popupCardAdd);
});

popupZoomCloseBtn.addEventListener('click', () => {
  closePopup(popupZoom);
});

popupForm.addEventListener('submit', submitProfileForm);

popupFormAddCard.addEventListener('submit', submitAddCardForm);





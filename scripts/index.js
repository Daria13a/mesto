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
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close-button');
const popupForm = popup.querySelector('#edit-profile');
const nameInput = popup.querySelector('.popup__text_type_name');
const profileName = document.querySelector('.profile__name');
const jobInput = popup.querySelector('.popup__text_type_profession');
const profileProfession = document.querySelector('.profile__profession');
const cardAddBtn = document.querySelector('.profile__add-button');
const popupCardAdd = document.querySelector('.popup-card-add');
const popupCardAddCloseBtn = popupCardAdd.querySelector('.popup__close-button');
const popupFormAddCard = popupCardAdd.querySelector('#add-card');
const inputNameCard = popupCardAdd.querySelector('.popup__text_type_title');
const inputUrlCard = popupCardAdd.querySelector('.popup__text_type_url');
const cardsList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.element-template').content;
const popupZoom = document.querySelector('.popup-card-zoom');
const popupZoomCloseBtn = popupZoom.querySelector('.popup__close-button');

function addCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__caption').textContent = card.name;
  cardElement.querySelector('.element__image').src = card.link;

  cardElement.querySelector('.element__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  });

  cardElement.querySelector('.element__trash').addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  });

  cardElement.querySelector('.element__image').addEventListener('click', function (event) {
    togglePopup(popupZoom);

    popupZoom.querySelector('.popup-card-zoom__image').src = card.link;
    popupZoom.querySelector('.popup-card-zoom__caption').textContent = card.name;
  });

  cardsList.prepend(cardElement);
};

initialCards.forEach(addCard);

function togglePopup (p) {
  p.classList.toggle('popup_opened');

}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  togglePopup(popup);
}

function formSubmitHandlerAddCard (e) {
  e.preventDefault();
  const newCard = {
    name: inputNameCard.value,
    link: inputUrlCard.value
  };
  togglePopup(popupCardAdd);
  addCard(newCard);
  inputNameCard.value = '';
  inputUrlCard.value = '';
}

popupOpenBtn.addEventListener('click', () => {
  togglePopup(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;

});

cardAddBtn.addEventListener('click', () => {
  togglePopup(popupCardAdd);
});

popupCloseBtn.addEventListener('click', () => {
  togglePopup(popup);
});

popupCardAddCloseBtn.addEventListener('click', () => {
  togglePopup(popupCardAdd);
});

popupZoomCloseBtn.addEventListener('click', () => {
  togglePopup(popupZoom);
});

popupForm.addEventListener('submit', formSubmitHandler);

popupFormAddCard.addEventListener('submit', formSubmitHandlerAddCard);


let popupButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__text_type_name');
let profileName = document.querySelector('.profile__name');
let jobInput = document.querySelector('.popup__text_type_profession');
let profileProfession = document.querySelector('.profile__profession');

function openPopup () {
  popup.classList.add ('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;

}

popupButton.addEventListener('click', openPopup);

function closePopup () {
  popup.classList.remove ('popup_opened');

}

popupClose.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();

}

formElement.addEventListener('submit', formSubmitHandler);

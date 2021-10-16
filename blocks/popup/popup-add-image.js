let popupAdd = document.querySelector('.popup-add-image');
let popupButtonAdd = popupAdd.querySelector('.profile__add-button');
let popupCloseAdd = popupAdd.querySelector('.popup__close');


function openPopupAdd () {
  popupAdd.classList.add ('popup_opened');

}
popupButtonAdd.addEventListener('click', openPopupAdd);

function closePopupAdd () {
  popupAdd.classList.remove ('popup_opened');

}

popupCloseAdd.addEventListener('click', closePopupAdd);

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';


import {
    initialCards,
    validationConfig,
    popupEdit,
    popupAddCard,
    popupOpenImage,
    popupForm,
    popupInputTypeName,
    popupInputTypeDescription,
    popupEditCloseButton,
    popupAddCloseButton,
    popupOpenImageCloseButton,
    editButton,
    addButton,
    name,
    description,
    elements,
    addForm,
    photo,
    place,
    elementAddPhoto,
    elementAddPlace
} from '../utils/constants.js';

const editFormValidator = new FormValidator(validationConfig, popupForm);
const addFormValidator = new FormValidator(validationConfig, addForm);
const popupClassEdit = new Popup(popupEdit);
const popupClassAddCard = new Popup(popupAddCard);
const popupClassOpenImage = new PopupWithImage(popupOpenImage);

//перенос имени и описания при открытии попапа профиля
function openProfilePopup() {
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
    popupClassEdit.open(popupEdit);
    editFormValidator.resetValidation();
}

//ф-я редактирования данных профиля
function submitAddCardForm() {
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup(popupEdit);
}

//ф-я просмотра фото
function showPopupOpenImage() {
    popupClassOpenImage.openPopupWithImage();
}

function createCard(data, cardSelector, showPopupOpenImage) {
    const card = new Card({ data, showPopupOpenImage }, cardSelector);
    const elementCard = card.generateCard();
    elements.prepend(elementCard);
}

//Функия добавления карточки
addForm.addEventListener('submit', () => {
    const data = {
        link: elementAddPhoto.value,
        place: elementAddPlace.value
    };
    addForm.reset();
    popupClassAddCard.close(popupAddCard)
    createCard(data, '.element-template', showPopupOpenImage);
});

//отрисовка карточек
function render() {
    initialCards.forEach((item) => {
        createCard(item, '.element-template', showPopupOpenImage);
    });
}
render();

function resetAddForm() {
    addFormValidator.resetValidation();
    addForm.reset();
    popupClassAddCard.open(popupAddCard);
}
//вызов валидаоров форм
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//слушатели
popupForm.addEventListener('submit', submitAddCardForm);
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', () => resetAddForm());
popupAddCloseButton.addEventListener('click', () => popupClassAddCard.close(popupAddCard));
popupEditCloseButton.addEventListener('click', () => popupClassEdit.close(popupEdit));
popupOpenImageCloseButton.addEventListener('click', () => popupClassOpenImage.close(popupOpenImage));
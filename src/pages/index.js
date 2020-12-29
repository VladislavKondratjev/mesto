import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

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
    elementAddPhoto,
    elementAddPlace,
    template
} from '../utils/constants.js';

const editFormValidator = new FormValidator(validationConfig, popupForm);
const addFormValidator = new FormValidator(validationConfig, addForm);
const popupImage = new PopupWithImage(popupOpenImage);
const userInfo = new UserInfo(name, description);

//перенос имени и описания при открытии попапа профиля
function openProfilePopup() {
    const userData = userInfo.getUserInfo();
    popupInputTypeName.value = userData.name;
    popupInputTypeDescription.value = userData.description;
    editForm.open();
    editFormValidator.resetValidation();
}

//ф-я редактирования данных профиля
const editForm = new PopupWithForm(popupEdit, () => {
    userInfo.setUserInfo(popupInputTypeName.value, popupInputTypeDescription.value);
});
editForm.setEventListeners();


function createCard(item) {
    const card = new Card(item, () => popupImage.open(item.link, item.place), template);
    return card.generateCard();
}

const addCardForm = new PopupWithForm(popupAddCard, (data) => {
    const cardElement = createCard(data)
    newCardSection.newItem(cardElement);
})

const newCardSection = new Section({
    items: [{
        name: elementAddPlace.value,
        link: elementAddPhoto.value
    }],
    renderer: (item) => {
        const cardElement = createCard(item);
        newCardSection.newItem(cardElement);
    }
}, elements);

//отрисовка карточек
const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const elementCard = createCard(data);
        newCardSection.addItem(elementCard);
    }
}, elements
);
cardList.renderItems();

function resetAddForm() {
    addFormValidator.resetValidation();
    addForm.reset();
    addCardForm.open();
}
//вызов валидаоров форм
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//слушатели
addCardForm.setEventListeners();
popupImage.setEventListeners();
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', () => resetAddForm());
popupAddCloseButton.addEventListener('click', () => addCardForm.close());
popupEditCloseButton.addEventListener('click', () => editForm.close());
popupOpenImageCloseButton.addEventListener('click', () => popupImage.close());
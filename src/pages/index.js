import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupConfirm from '../components/PopupConfirm.js';
import {
    validationConfig,
    popupEdit,
    popupAddCard,
    popupOpenImage,
    popupForm,
    popupInputTypeName,
    popupInputTypeDescription,
    popupInputTypeAvatar,
    popupEditCloseButton,
    popupAddCloseButton,
    popupOpenImageCloseButton,
    popupConfirmCloseButton,
    popupAvatarCloseButton,
    editButton,
    addButton,
    name,
    description,
    elements,
    addForm,
    template,
    popupAvatar,
    avatarPic,
    button,
    popupConfirmForm,
    updateAvatarForm
} from '../utils/constants.js';

let userId;

const popupImage = new PopupWithImage(popupOpenImage);
const popupConfirm = new PopupConfirm(popupConfirmForm);
const addFormValidator = new FormValidator(validationConfig, addForm);
const editFormValidator = new FormValidator(validationConfig, popupForm);
const avatarFormValidator = new FormValidator(validationConfig, updateAvatarForm);
const userInfo = new UserInfo(name, description, avatarPic);
const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: 'cabe1d76-a428-4aaa-846e-7d735d853b84'
});

const cardList = new Section((data) => {
    const elementCard = createCard(data);
    cardList.addItem(elementCard)
}, elements)

const editForm = new PopupWithForm(popupEdit, () => {
    button.textContent = 'Сохранение...'
    api.updateUserInfo({ name: popupInputTypeName.value, about: popupInputTypeDescription.value })
        .then(({ name, about, avatar }) => {
            userInfo.setUserInfo({ name, about, avatar })
        })
        .catch((err) => console.log(err))
        .finally(() => {
            button.textContent = 'Сохранить';
        });
});

const avatarForm = new PopupWithForm(popupAvatar, () => {
    button.textContent = 'Сохранение...'
    api.updateAvatar({ avatar: popupInputTypeAvatar.value })
        .then(({ name, about, avatar }) => {
            userInfo.setUserInfo({ name, about, avatar })
        })
        .catch((err) => console.log(err))
        .finally(() => {
            button.textContent = 'Сохранить';
        });
})

const addCardForm = new PopupWithForm(popupAddCard, (data) => {
    button.textContent = 'Сохранение...'
    api.postCard(data)
        .then((res) => {
            const cardElement = createCard(res)
            cardList.newItem(cardElement);
        })
        .catch((err) => console.log(err))
        .finally(() => {
            button.textContent = 'Сохранить';
        });
})

function createCard(item) {
    const card = new Card(
        item,
        template,
        userId,
        {
            showPopupOpenImage: () => {
                popupImage.open(item.link, item.name)
            },
            handleLikeClick: (carId, isLiked) => {
                if (isLiked) {
                    api.deleteLike(carId)
                        .then((res) => {
                            card.setLikes(res.likes)
                        })
                        .catch((err) => console.log(err))
                } else {
                    api.putLike(carId)
                        .then((res) => {
                            card.setLikes(res.likes);
                        })
                        .catch((err) => console.log(err))
                }
            },
            handleDeleteClick: (carId) => {
                popupConfirm.setSubmitAction(() => {
                    api.deletetCard(carId)
                        .then(() => {
                            card.remove();
                            popupConfirm.close();
                        })
                        .catch((err) => console.log(err))
                });
                popupConfirm.open();
            }
        })

    return card.generateCard();
}

function openProfilePopup() {
    const userData = userInfo.getUserInfo();
    popupInputTypeName.value = userData.name;
    popupInputTypeDescription.value = userData.about;
    editForm.open();
    editFormValidator.resetValidation();
}

function openAvatarPopup() {
    avatarForm.open();
    avatarFormValidator.resetValidation();
}

function resetAddForm() {
    addFormValidator.resetValidation();
    addForm.reset();
    addCardForm.open();
}

Promise.all([
    api.getUserData(),
    api.getInitialCards()
])
    .then((values) => {
        const userValues = values[0];
        const initialCards = values[1];
        userId = userValues._id;
        userInfo.setUserInfo(userValues);
        cardList.renderItems(initialCards);
    })
    .catch((err) => console.log(err));

//вызов валидаоров форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();
avatarFormValidator.enableValidation();
//слушатели
editForm.setEventListeners();
popupImage.setEventListeners();
avatarForm.setEventListeners();
addCardForm.setEventListeners();
popupConfirm.setEventListeners()

addButton.addEventListener('click', () => resetAddForm());
avatarPic.addEventListener('click', openAvatarPopup)
editButton.addEventListener('click', openProfilePopup);
popupAddCloseButton.addEventListener('click', () => addCardForm.close());
popupEditCloseButton.addEventListener('click', () => editForm.close());
popupAvatarCloseButton.addEventListener('click', () => avatarForm.close());
popupConfirmCloseButton.addEventListener('click', () => popupConfirm.close());
popupOpenImageCloseButton.addEventListener('click', () => popupImage.close());

console.log(popupOpenImageCloseButton.addEventListener('click', () => popupImage.close()))
console.log(popupAvatarCloseButton.addEventListener('click', () => avatarForm.close()))
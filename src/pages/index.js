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
    template,
    popupAvatar,
    avatar,
    button
} from '../utils/constants.js';

const editFormValidator = new FormValidator(validationConfig, popupForm);
const addFormValidator = new FormValidator(validationConfig, addForm);
const avatarFormValidator = new FormValidator(validationConfig, popupAvatar)
const popupImage = new PopupWithImage(popupOpenImage);
const userInfo = new UserInfo(name, description);
const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: 'cabe1d76-a428-4aaa-846e-7d735d853b84',
    userId: '787266997a5a6efee32292d8'
});
const cardList = new Section((data) => {
    const elementCard = createCard(data);
    cardList.addItem(elementCard)
}, elements)

//перенос имени и описания при открытии попапа профиля
function openProfilePopup() {
    const userData = userInfo.getUserInfo();
    popupInputTypeName.value = userData.name;
    popupInputTypeDescription.value = userData.about;
    editForm.open();
    editFormValidator.resetValidation();
}

//ф-я редактирования данных профиля
const editForm = new PopupWithForm(popupEdit, () => {
    button.textContent = 'Сохранение...'
    api.updateUserInfo({ name: popupInputTypeName.value, about: popupInputTypeDescription.value })
        .then(({ name, about }) => {
            userInfo.setUserInfo({ name, about })
        })
        .catch((err) => console.log(err))
        .finally(() => {
            button.textContent = 'Сохранить';
        });
});
// const avatarForm = new PopupWithForm(popupAvatar)
// avatarForm.setEventListeners();

function createCard(item) {
    const card = new Card(
        item,
        template,
        api.userId,
        {  //колбэки отвечающие за логику работы карточки
            showPopupOpenImage: () => {
                popupImage.open(item.link, item.name)
                //...что должно произойти при клике на картинку
            },
            handleLikeClick: (carId, isLiked) => {
                if (isLiked) {
                    //отправляем запрос снятия лайка
                    api.deleteLike(carId)
                        .then((res) => {
                            //вызываем метод карточки для обновления отображения лайков
                            card.setLikes(res.likes)
                        })
                        .catch((err) => console.log(err))
                } else {
                    //отправляем запрос на установку лайка
                    api.putLike(carId)
                        .then((res) => {
                            //вызываем метод карточки для обновления отображения лайков
                            card.setLikes(res.likes)
                        })
                        .catch((err) => console.log(err))
                }
            },
            // handleDeleteClick: () => {
            //     api.removeMessage(card.getId())
            //         .then(() => card.removeMessage())
            //         .catch((err) => console.log(err))

            //     //...что должно произойти при клике на удаление
            // }
        })

    return card.generateCard();
}

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

//отображение данных и карточек с сервера
Promise.all([
    api.getUserData(),
    api.getInitialCards()
])
    .then((values) => {
        const userValues = values[0];
        const initialCards = values[1];
        userInfo.setUserInfo(userValues);
        cardList.renderItems(initialCards);
    })
    .catch((err) => console.log(err));

function resetAddForm() {
    addFormValidator.resetValidation();
    addForm.reset();
    addCardForm.open();
}
//вызов валидаоров форм
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//слушатели
editForm.setEventListeners();
addCardForm.setEventListeners();
popupImage.setEventListeners();
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', () => resetAddForm());
popupAddCloseButton.addEventListener('click', () => addCardForm.close());
popupEditCloseButton.addEventListener('click', () => editForm.close());
popupOpenImageCloseButton.addEventListener('click', () => popupImage.close());
//avatar.addEventListener('click', avatarForm)
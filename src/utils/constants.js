//массив исходных данных
export const initialCards = [
    {
        place: 'Санкт-Петербург',
        link: 'https://allovertheus.ru/wp-content/uploads/2020/01/novogodnie-yolki-v-sankt-peterburge-v-yanvare.jpg'
    },
    {
        place: 'Самара',
        link: 'https://static.ngs.ru/news/99/preview/bbfcce7e2c040d0b1bb65a3102356a9017dd36852_1900_1267.jpg'
    },
    {
        place: 'Казань',
        link: 'https://i.ytimg.com/vi/Wn8wx3ieFZQ/maxresdefault.jpg'
    },
    {
        place: 'Москва',
        link: 'https://img.fotokonkurs.ru/cache/photo_1000w/photos/2010/12/23/3/7168f69c348019d8a3c5a19b814ca4cb/23249c099330217b.jpg'
    },
    {
        place: 'Нижний Новгород',
        link: 'https://mtdata.ru/u4/photo1F1F/20574129751-0/original.jpg'
    },
    {
        place: 'Красноярск',
        link: 'https://www.trk7.ru/upload/iblock/7a4/7a44e3f7c2c4d0e0f5c6b9215c68abd6.jpg'
    }
];
//выбираем элементы формы
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_type_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error'
}

export const ESC_KEY = 'Escape';
//выбираем попапы
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupOpenImage = document.querySelector('.popup_type_image');
export const popupForm = document.querySelector('.popup__form');
export const popupInputTypeName = document.querySelector('.popup__input_type_name');
export const popupInputTypeDescription = document.querySelector('.popup__input_type_description');
//выбираем кнопки
export const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
export const popupAddCloseButton = popupAddCard.querySelector('.popup__close-button');
export const popupOpenImageCloseButton = popupOpenImage.querySelector('.popup__close-button');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
//выбираем имя и описание профиля
export const name = document.querySelector('.profile__name');
export const description = document.querySelector('.profile__description');
//выбираем грид и форму 
export const elements = document.querySelector('.elements');
export const addForm = document.querySelector('.add-element-form');
//выбираем элементы карточки для открытия на весь экран
export const photo = document.querySelector('.popup__image');
export const place = document.querySelector('.popup__caption');
//выбираем инпуты попапа добавления карточки
export const elementAddPhoto = addForm.querySelector('.popup__input_type_photo');
export const elementAddPlace = addForm.querySelector('.popup__input_type_place');
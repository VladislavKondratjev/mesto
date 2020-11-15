//выбираем попапы
const popup = document.querySelector('.popup')
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupOpenImage = document.querySelector('.popup_type_image');
//выбираем форму редактирования профиля и поля формы
const form = document.querySelector('.popup__form');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeDescription = document.querySelector('.popup__input_type_description');
//выбираем кнопки
const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
const popupAddCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupOpenImageCloseButton = popupOpenImage.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
//выбираем имя и описание
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
//ф-я откртия попапов
function showPopup(popup) {
    popup.classList.add('popup_opened');
}   
//подставляем данные в ф-ю редактирования попапа
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
//ф-я закрытия попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');   
}
//ф-я редактирования данных профиля
function submitForm(event) {
    event.preventDefault();
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup(popupEdit);
}
//спринт 5
const initialCards = [
    {
        place: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        place: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        place: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        place: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        place: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        place: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//выбираем грид и форму 
const elements = document.querySelector('.elements');
const addForm = document.querySelector('.add-element-form');

function addCards(data) {
    const elementTemplate = document.querySelector('.element-template').content;
    const elementCard = elementTemplate.cloneNode(true);
    const elementPhoto = elementCard.querySelector('.element__photo');
    const elementPlace = elementCard.querySelector('.element__place');
    const elementDeleteButton = elementCard.querySelector('.element__delete-button');
    const elementLikeButton = elementCard.querySelector('.element__like-button');
    
    elementPhoto.src = data.link;
    elementPlace.textContent = data.place;

    elementDeleteButton.addEventListener('click', event => {
        const element = event.target.closest('.element')
        
        if (element) {
            element.remove()
        }
    })
    
    elementLikeButton.addEventListener('click', event => {
        event.target.classList.toggle('element__like-button_type_active');    
    })
    
    elementPhoto.addEventListener('click', () => showPopupOpenImage(data.link, data.place));

    elements.prepend(elementCard);
}

//ф-я просмотра фото
const photo = document.querySelector('.element__photo');
const place = document.querySelector('.element__place');
function showPopupOpenImage(src, alt) {
    photo.src = src;
    photo.alt = alt;
    place.textContent = alt;
    showPopup(popupOpenImage);
}
//Функия добавления карточки
    addForm.addEventListener('submit', event => {
        event.preventDefault();
        const elementAddPhoto = addForm.querySelector('.popup__input_type_photo');
        const elementAddPlace = addForm.querySelector('.popup__input_type_place');
        const cardData = {
            link: elementAddPhoto.value,
            place: elementAddPlace.value
        }    

        addCards(cardData);        
        addForm.reset();        
        closePopup(popupAddCard);
});

initialCards.forEach(addCards);
form.addEventListener('submit', submitForm);
editButton.addEventListener('click', () => showPopup(popupEdit));
addButton.addEventListener('click', () => showPopup(popupAddCard));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupEditCloseButton.addEventListener('click', () =>  closePopup(popupEdit));
popupOpenImageCloseButton.addEventListener('click', () =>  closePopup(popupOpenImage));


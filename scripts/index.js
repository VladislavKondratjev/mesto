//выбираем попапы
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
//сonst imageButton = document.querySelector('.element__photo');
//выбираем имя и описание
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');

//ф-я откртия попапа редактирования профиля
function showPopup() {
    popupEdit.classList.add('popup_opened');
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
}

//ф-я закрытия попапов
function closePopup() {
    popupEdit.classList.remove('popup_opened');
    popupAddCard.classList.remove('popup_opened');
    popupOpenImage.classList.remove('popup_opened');      
}

//ф-я редактирования данных профиля
function submitForm(event) {
    event.preventDefault();
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup(popupEdit);
}
//спринт 5

//открытие попапа добавления карточки
function showPopupAddCard() {
    popupAddCard.classList.add('popup_opened');
}

function showPopupOpenImage() {
    popupOpenImage.classList.add('popup_opened');
}

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
    function showPopupOpenImage(src, alt) {
        elementPhoto.src = src;
        elementPhoto.alt = alt;
        elementPlace.textContent = alt;
        showPopupOpenImage(popupOpenImage)
    }
    
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
editButton.addEventListener('click', showPopup);
addButton.addEventListener('click', showPopupAddCard);
popupAddCloseButton.addEventListener('click', closePopup);
popupEditCloseButton.addEventListener('click', closePopup);
popupOpenImageCloseButton.addEventListener('click', closePopup);


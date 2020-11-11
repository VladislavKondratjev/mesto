const popup = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupContent = document.querySelector('.popup__content');

//выбираем форму и поля формы
const form = document.querySelector('.popup__form');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeDescription = document.querySelector('.popup__input_type_description');

//выбираем кнопки
const popupCloseButton = document.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

//выбираем имя и описание
const name = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');

//ф-я откртия попапа редактирования профиля
function showPopup() {
    popup.classList.add('popup_opened');
    popupInputTypeName.value = name.textContent;
    popupInputTypeDescription.value = description.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
    popupAddCard.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    name.textContent = popupInputTypeName.value;
    description.textContent = popupInputTypeDescription.value;
    closePopup(popup);
}

popupCloseButton.addEventListener('click', event => {
    event.classlist.closest.remove('.popup_opened');
});

form.addEventListener('submit', submitForm);
editButton.addEventListener('click', showPopup);
//popupCloseButton.addEventListener('click', closePopup);
addButton.addEventListener('click', showPopupAddCard);

//спринт 5
//добавляем элементы в темплейт
function showPopupAddCard() {
    popupAddCard.classList.add('popup_opened');
}
popupCloseButton.addEventListener('click', () => closePopup());

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
    
    elementCard.querySelector('.element__photo').src = data.link;
    elementCard.querySelector('.element__place').textContent = data.place;

    elementCard.querySelector('.element__delete-button').addEventListener('click', event => {
        const element = event.target.closest('.element')
    
        if (element) {
        element.remove()
        }
      })

    elementCard.querySelector('.element__like-button').addEventListener('click', event => {
        event.target.classList.toggle('element__like-button_type_active');
    }) 
    
    //const popup = document.querySelector('.popup_type_image');

    
    elements.prepend(elementCard);
    
}


//Функия добавления карточки    
addForm.addEventListener('submit', event => {
    event.preventDefault();
    const elementAddPhoto = addForm.querySelector('.popup__input_type_photo');
    const elementAddPlace = addForm.querySelector('.popup__input_type_place');
            
    const cardData = {
        place: elementAddPlace.value,
        link: elementAddPhoto.value
    }

    addCards(cardData);        
    addForm.reset();        
    closePopup(popupAddCard);
});

initialCards.forEach(addCards);


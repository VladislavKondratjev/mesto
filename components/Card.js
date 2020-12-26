export default class Card {
    constructor(data, showPopupOpenImage, cardSelector) {
        this._photo = data.link;
        this._place = data.place;
        this._cardSelector = cardSelector;
        this._showPopupOpenImage = showPopupOpenImage;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._element.remove();
            this._element = null;
        });

        this._element.querySelector('.element__photo').addEventListener('click', () => this._showPopupOpenImage(this._photo, this._place));

    }

    _handleLikeClick() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_type_active');
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__photo').src = this._photo;
        this._element.querySelector('.element__photo').alt = this._place;
        this._element.querySelector('.element__place').textContent = this._place;
        this._setEventListeners();

        return this._element;
    }

}


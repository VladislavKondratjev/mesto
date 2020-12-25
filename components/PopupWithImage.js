import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photo = popupSelector.querySelector('.popup__image');
        this._place = popupSelector.querySelector('.popup__caption');
    }

    openPopupWithImage(link, place) {
        this._photo.src = link;
        this._photo.alt = place;
        this._place.textContent = place;
        super.open();
    }

}
import Popup from './Popup.js';


export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photo = document.querySelector('.popup__image');
        this._place = document.querySelector('.popup__caption');
    }

    open(src, alt) {
        super.open();
        this._photo.src = src;
        this._photo.alt = alt;
        this._place.textContent = alt;
    }

}
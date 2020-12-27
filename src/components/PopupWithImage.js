import Popup from './Popup.js';
import {
    photo,
    place
} from '../../src/utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._photo = photo;
        this._place = place;
    }

    open(src, alt) {
        super.open();
        this._photo.src = src;
        this._photo.alt = alt;
        this._place.textContent = alt;
    }

}
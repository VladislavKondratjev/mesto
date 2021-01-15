import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
    constructor() {

    }

    setEventListeners() {

    }

    setSubmitAction(submitAction) {
        this._handleSubmitCallback = submitAction;
    }
}
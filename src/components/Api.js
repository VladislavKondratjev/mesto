export default class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
    }
    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
}
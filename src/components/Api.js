export default class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
    }
    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token,
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

    getUserData() {
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

    updateUserInfo(data) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

    updateAvatar(data) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

    postCard(data) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

    deletetCard(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

    putLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

    deleteLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

}
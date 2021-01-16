export default class UserInfo {
    constructor(name, about) {
        this._userName = name;
        this._userDescription = about;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userDescription.textContent
        }
    }

    setUserInfo({ name, about }) {
        this._userName.textContent = name;
        this._userDescription.textContent = about;
    }

}
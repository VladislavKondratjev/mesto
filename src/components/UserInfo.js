export default class UserInfo {
    constructor(name, about, avatar) {
        this._userName = name;
        this._userDescription = about;
        this._userAvatar = avatar;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userDescription.textContent,
            // avatar: this._userAvatar.src
        }
    }

    setUserInfo({ name, about, avatar }) {
        this._userName.textContent = name;
        this._userDescription.textContent = about;
        this._userAvatar.src = avatar
    }

}
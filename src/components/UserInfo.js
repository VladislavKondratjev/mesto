export default class UserInfo {
    constructor(name, about, avatar, _id) {
        this._userName = name;
        this._userDescription = about;
        this._userAvatar = avatar;
        this._userId = _id;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userDescription.textContent,
            avatar: this._userAvatar.src,
            _id: this._userId
        }
    }

    setUserInfo({ name, about }) {
        this._userName.textContent = name;
        this._userDescription.textContent = about;
    }

}
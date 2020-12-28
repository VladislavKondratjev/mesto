export default class UserInfo {
    constructor(userName, userDescription) {
        this._userName = userName;
        this._userDescription = userDescription;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            description: this._userDescription.textContent
        }
    }

    setUserInfo(userName, userDescription) {
        this._userName.textContent = userName;
        this._userDescription.textContent = userDescription;
    }

}
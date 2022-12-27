export class LoginModel {
    constructor(public email: String, public password: String) {
        return {
            email: this.email,
            password: this.password
        }
    }
}
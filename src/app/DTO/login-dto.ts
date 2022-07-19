export class LoginDto {

    
    private _user: string;
    private _password: string;

    constructor(user: string, password: string){

        this._user = user;
        this._password = password;

    }
}

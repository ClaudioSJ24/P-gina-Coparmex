export class LoginDto {

    
    private user: string;
    private password: string;

    constructor(user: string, password: string){

        this.user = user;
        this.password = password;

    }
}

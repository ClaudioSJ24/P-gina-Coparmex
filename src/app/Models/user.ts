import { Roles } from "./Interfaces/roles";
import { Person } from "./person";
import { Role } from "./role";

export class User extends Person {

    user: string;
    password: string;
    roles: Roles;

    constructor(name: string, lastname: string, phone: number, email: string, user: string, password: string, role: Roles){
        super(name, lastname, phone, email);
        this.user = user;
        this.password = password;
        this.roles = role;

    }

    

    
}
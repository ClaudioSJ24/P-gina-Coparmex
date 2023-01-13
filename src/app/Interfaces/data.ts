
import { Contact } from '../Models/contact';
import { User } from '../Models/user';
import { Partner } from './../Models/partner';
export interface DataResponse {
    responsePartner: Partner 
}

export interface DataUser{
    responseUser: User
}

export interface DataContact{
    responseContact : Contact;
}
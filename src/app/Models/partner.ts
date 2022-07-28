
import { ServiciosModule } from './../Modules/servicios/servicios.module';
import { Address } from './address';
import { Event } from "./event";

import { Person } from "./person";
import { Role } from './role';

export class Partner extends Person{


    
    user: string;
    company: string;
    address: Address;
    password: string;
    dischargeDate!: Date;
    updateDate!: Date;
    event!: Event;
    role!: Role;
    partner!: string[];


    constructor(name: string, lastname: string, phone: number, email: string, passes: number, user: string, company: string, address:Address, password: string){

        super(name, lastname, phone, email,passes);
        this.user = user;
        this.company = company;
        this.address = address;
        this.password = password;

    }


    
    /*public get user() : string {
        return this._user;
    }

    
    public set user(user : string) {
        this._user = user;
    }

    
    public get company() : string {
        return this._company;
    }

    
    public set company(company : string) {
        this._company = company;
    }

    
    public get address() : Address {
        return this._address;
    }

    
    public set address(address : Address) {
        this._address = address;
    }
    
    
    public get password() : string {
        return this._password;
    }

    
    public set password(password : string) {
        this._password = password;
    }
    
    
    public get dischargeDate() : Date {
        return this._dischargeDate;
    }

    
    public set dischargeDate(date : Date) {
        this._dischargeDate = date;
    }

    
    public get updateDate() : Date {
        return this._updateDate;
    }

    
    public set updateDate(date : Date) {
        this._updateDate = date;
    }
    
    
    public get event() : Event {
        return this._event;
    }

    
    public set event(event : Event) {
        this._event = event;
    }

    
    public get role() : Role {
        return this._role;
    }

    
    public set role(role : Role) {
        this._role = role;
    }
     
    
    
    
    */
}

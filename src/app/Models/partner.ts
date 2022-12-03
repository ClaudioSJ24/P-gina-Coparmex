
import { ServiciosModule } from './../Modules/servicios/servicios.module';
import { Address } from './address';
import { Event } from "./event";

import { Person } from "./person";
import { Role } from './role';

export class Partner extends Person{


    
    
    company: string;
    address: Address;
    dischargeDate!: Date;
    updateDate!: Date;
    role!: Role;
    partner!: string[];


    constructor(name: string, lastname: string, phone: number, email: string, user: string, company: string, address:Address, password: string){

        super(name, lastname, phone, email);
        this.company = company;
        this.address = address;
    }
  
   
}



import { Address } from './address';


import { Person } from "./person";


export class Partner extends Person{


    
    
    company: string;
    address: Address;
    dischargeDate!: Date;
    updateDate!: Date;
    
    


    constructor(name: string, lastname: string, phone: number, email: string, company: string, address:Address, ){

        super(name, lastname, phone, email);
        this.company = company;
        this.address = address;
    }
  
   
}

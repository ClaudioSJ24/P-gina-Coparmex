import { Person } from "./person";

export class Contact extends Person{

    company: string;
    activity: string;
    message: string;
    dischargeDate!: Date;

    constructor(name: string, lastname: string, phone: number, email: string, company: string, activity: string, message: string){

        super(name, lastname, phone, email);
        this.company = company;
        this.activity = activity ;
        this.message = message

    }
    
}
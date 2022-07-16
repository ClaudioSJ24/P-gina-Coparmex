import { Event } from './event';
import { Person } from "./person";

export class NotPartner extends Person{

    private _dischargeDate!: Date;
    private _updateDate!: Date;
    private _event!: Event;
    

    constructor(idPerson: number, name: string, lastname: string, phone: number, email: string, passes: number){

        super(idPerson, name, lastname, phone, email,passes);
        
    }

    
    public get dischargeDate() : Date {
        return this._dischargeDate;
    }

    
    public set dischargeDate(dischargeDate : Date) {
        this._dischargeDate = dischargeDate;
    }

    
    public get updateDate() : Date {
        return this._updateDate;
    }

    
    public set updateDate(updateDate : Date) {
        this._updateDate = updateDate;
    }

    
    public get event() : Event {
        return this._event;
    }

    
    public set event(event : Event) {
        this._event = event;
    }
    
    
    
    
    
    

}

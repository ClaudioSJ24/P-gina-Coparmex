export class Person {


    private _idPerson: number;
    private _name: string;
    private _lastname: string;
    private _phone: number;
    private _email: string;
    private _passes: number;

    constructor(idPerson: number, name: string, lastname: string, phone: number, email: string, passes: number){
        this._idPerson = idPerson
        this._name = name
        this._lastname = lastname
        this._phone = phone
        this._email = email
        this._passes = passes
    }


    
    public get id() : number {
        return this._idPerson;
    }

    
    public set id(id : number) {
        this._idPerson = id;
    }

    
    public get name() : string {
        return this._name;
    }

    
    public set name(name : string) {
        this._name = name;
    }

    
    public get lastname() : string {
        return this._lastname;
    }

    
    public set lastname(lastname : string) {
        this._lastname = lastname;
    }

    
    public get phone() : number  {
        return this._phone;
    }

    
    public set phone(phone : number) {
        this._phone = phone;
    }

    
    public get email() : string {
        return this._email;
    }

    
    public set email(email : string) {
        this._email = email;
    }

    
    public get passes() : number {
        return this._passes;
    }

    
    public set passes(passes : number) {
        this._passes = passes;
    }
    
    
    
    
    
    
    
    
    
    
    
    
   

    


    
    


}

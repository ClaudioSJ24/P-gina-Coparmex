export class Event {

    private _id: number;
    private _name: string;
    private _nameE: string;
    private _place: string;
    private _register: Date = new Date();

    

    
    constructor(id: number, name:string, nameE:string, place:string ){

        this._id = id;
        this._name = name;
        this._nameE = nameE;
        this._place = place;
    }

    
    public get id() : number {
        return this._id;
    }

    
    public set id(id : number) {
        this._id = id;
    }

    
    public get name() : string {
        return this._name;
    }

    
    public set name(name : string) {
        this._name = name;
    }

    
    public get nameE() : string {
        return this._nameE;
    }

    
    public set nameE(nameE : string) {
        this._nameE = nameE;
    }

    
    public get place() : string {
        return this._place;
    }

    
    public set place(place : string) {
        this._place = place;
    }
    
    
    public get register() : Date {
        return this._register
    }

    
    public set register(register : Date) {
        this._register = register;
    }
    
    
    
    
    
    
    
    

}

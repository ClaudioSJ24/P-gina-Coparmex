export class Address {

    street: string;
    number: number;
    colony: string;
    codePostal: number;
    city: string;

    constructor(street: string, number: number, colony: string, codePostal: number, city: string){

        this.street = street;
        this.number = number;
        this.colony = colony;
        this.codePostal = codePostal;
        this.city = city;

    }

    /*
    
    public get street() : string {
        return this._street;
    }

    
    public set street(street : string) {
        this._street = street;
    }

    
    public get number() : number {
        return this._number;
    }

    
    public set number(number : number) {
        this._number = number;
    }

    
    public get colony() : string {
        return this._colony;
    }

    
    public set colony(colony : string) {
        this._colony = colony;
    }

    
    public get codePostal() : number {
        return this._codePostal;
    }

    
    public set codePostal(codeP : number) {
        this._codePostal = codeP;
    }

    
    public get city() : string {
        return this._city;
    }

    
    public set city(city : string) {
        this._city = city;
    }
    
    
    
    
    */
    
    
    
    


    
}

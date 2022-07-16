import { RoleName } from "./Enum/role-name";

export class Role {

    private _id: number;
    private _name: RoleName;

    constructor(id: number, name: RoleName){
        this._id = id;
        this._name = name;
    }

    
    public get id() : number {
        return this._id;
    }
    
    
    public set id(id : number) {
        this._id = id;
    }

    
    public get name() : RoleName {
        return this._name;
    }

    
    public set name(name :  RoleName) {
        this._name = name;
    }
    
    
    



}

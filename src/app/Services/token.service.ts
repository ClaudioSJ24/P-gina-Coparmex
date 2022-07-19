import { UserData } from './../Modules/protected/components/socios/socios.component';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUser';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})


export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public getToken() : string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }
  
  public setToken(token : string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getUser() : string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }
  
  public setUser(user : string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, user);
  }

  
  public setAutorities(autorities : string[]) {

    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(autorities));
  }

  
  public getAutorities() : string[] {
    this.roles = [];
    
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {

      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '{}').forEach((autority: { autority: string; })  => {

        this.roles.push(autority.autority)        
      });
            
    }
    
    return this.roles;
  }

  
  public logOut(){
    sessionStorage.clear();
  }
  
  
  




  
  
  
  
}

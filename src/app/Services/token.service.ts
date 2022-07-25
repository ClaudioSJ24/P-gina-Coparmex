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

    sessionStorage.removeItem(AUTHORITIES_KEY);
    sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(autorities).toString());
  }

  
  public getAutorities() : string[] {
    this.roles = [];
    
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {

      /**
       * Nota la variable a utilizar en el recorrido para obtener los roles tiene que tener el mismo nombre
       * que tiene en el array de la respuesta:
       * grantedAuthorities: Array(2)
          0: {authority: 'ROL_PARTNER'}
          1: {authority: 'ROL_ADMINISTRATOR'}
          length: 2
       */

      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: { authority: string; })  => {

        this.roles.push(authority.authority)        
      });
            
    }
    
    return this.roles;
  }

  
  public logOut(){
    sessionStorage.clear();
  }
  
  
  




  
  
  
  
}

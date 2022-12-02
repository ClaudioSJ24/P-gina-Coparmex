import { environment } from './../../environments/environment';

import { JwtDto } from './../DTO/jwt-dto';
import { NewPartnerDto } from './../DTO/new-partner-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { LoginDto } from '../DTO/login-dto';
import { map } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url = environment.urlBase;

  constructor(private httpC: HttpClient, private tokenS: TokenService) { }

  public save(partner:NewPartnerDto): Observable<any>{

    return this.httpC.post<any>(this.url+ "partners/save", partner);
    
  }

  public login(user: LoginDto): Observable<any | void>{

    return this.httpC.post<JwtDto>(this.url + "auth/login", user).pipe(
      map((res) => {
        
        return res.datos 
        /**
         * Del objeto res, solo retorna los datos necesarios para almacenar en el sessionStore
         * res{
              "datos": {
                  "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwZWRybyBtb3RhIiwiaWF0IjoxNjU4NTYyODcwLCJleHAiOjE2NTg1ODA4NzB9.nlO16uAHwb1I_41ePY6L6FQXyxjUGmW1OsWK8XqvE3S4w6NBhInBadskGlq91rPKYOMrcMDhx_aYhZLoxk3G_w",
                  "bearer": "Bearer",
                  "user": "pedro mota",
                  "grantedAuthorities": [
                     {
                       "authority": "ROL_PARTNER"
                      }
                    ]
             },
    "Success": true
}
         * 
        IMPORTANTE: LAS PROPIEDADES DE LA INTERFAZ JWT-DTO TIENEN QUE TENER EL MISMO NOMBRE DE LAS PROPIEDADES CONTENIDAS EN DATOS*/
        
      })
    )
    
  }
}

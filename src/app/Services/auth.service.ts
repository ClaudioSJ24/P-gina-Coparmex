import { UserData } from './../Modules/protected/components/socios/socios.component';
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


  url: string = 'http://localhost:9089/';

  constructor(private httpC: HttpClient, private tokenS: TokenService) { }

  public save(partner:NewPartnerDto): Observable<any>{

    return this.httpC.post<any>(this.url + "partners/save", partner);
    
  }

  public login(user: LoginDto): Observable<any | void>{

    return this.httpC.post<JwtDto>(this.url + "auth/login", user).pipe(
      map((res) => {

        return res.datos
        
      })
    )
    
  }
}

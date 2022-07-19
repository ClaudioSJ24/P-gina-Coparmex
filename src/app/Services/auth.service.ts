import { JwtDto } from './../DTO/jwt-dto';
import { NewPartnerDto } from './../DTO/new-partner-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { LoginDto } from '../DTO/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:9089/';

  constructor(private httpC: HttpClient) { }

  public save(partner:NewPartnerDto): Observable<any>{

    return this.httpC.post<any>(this.url + "partners/save", partner);
    
  }

  public login(user: LoginDto): Observable<JwtDto>{

    return this.httpC.post<JwtDto>(this.url + "auth/login", user);
  }
}

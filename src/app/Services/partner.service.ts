import { PartnerResponse } from './../Interfaces/partnerResponse';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Partner } from '../Models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  url = environment.urlBase;

  constructor(private httpC: HttpClient) { }

  public getPartners(): Observable<PartnerResponse>{

    return this.httpC.get<PartnerResponse>(this.url +"partners/getAll")


  }




}

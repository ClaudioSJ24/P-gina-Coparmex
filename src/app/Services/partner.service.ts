import { PartnerResponse } from './../Interfaces/partnerResponse';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Partner } from '../Models/partner';
import { DataResponse } from '../Interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  url = environment.urlBase;

  constructor(private httpC: HttpClient) { }

  public getPartners(): Observable<any>{

    return this.httpC.get<PartnerResponse>(this.url +"partners/getAll")


  }

  /**
   * save
   */
  public savePartner(partner: PartnerResponse) : Observable<any>{

    return this.httpC.post<PartnerResponse>(this.url +"partners/save", partner)
    
  }

  /**
   * deletePartner
   * revisar en spring boot si es "partner o partners"
   */
  public deletePartner(id: number): Observable<any>{
    return this.httpC.delete(`${this.url}partners/delete/${id}`)
    
  }

  public getPartner(id: number): Observable<DataResponse>{
    return this.httpC.get<DataResponse>(`${this.url}partners/getId/${id}`)
  }

  public updatePartner(id: number, partner: PartnerResponse): Observable<any>{
    return this.httpC.put(`${this.url}partners/update/${id}`, partner)
  }




}

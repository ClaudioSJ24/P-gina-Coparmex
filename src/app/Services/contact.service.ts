import { DataContact } from './../Interfaces/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactResponse } from '../Interfaces/contactResponse';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = environment.urlBase;

  constructor(private httpC: HttpClient) { }

  public getContacts(): Observable<any>{
    return this.httpC.get<ContactResponse>(`${this.url}contacts/getAll`)
  }

  public saveContact(contact: ContactResponse): Observable<any>{
    return this.httpC.post<ContactResponse>(`${this.url}contacts/save`, contact)
  }

  public getContact(id: number): Observable<DataContact>{
    return this.httpC.get<DataContact>(`${this.url}contacts/getId/${id}`)
  }

  public deleteContact(id: number): Observable<DataContact>{
    return this.httpC.delete<DataContact>(`${this.url}contacts/delete/${id}`)
  }


  
}

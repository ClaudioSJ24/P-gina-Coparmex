import { User } from './../Models/user';
import { UserResponse } from 'src/app/Interfaces/userResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataUser } from '../Interfaces/data';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.urlBase;

  constructor(private httpC: HttpClient) { }

  public getUsers(): Observable<UserResponse>{

    return this.httpC.get<UserResponse>(this.url + "users/getAll");

  }

  public getUser(id: number): Observable<DataUser>{

    return this.httpC.get<DataUser>(`${this.url}users/getId/${id}`)
    
  }

  public saveUser(user:DataUser ): Observable<DataUser>{
    return this.httpC.post<DataUser>(`${this.url}users/save`, user)
  }

  public updateUser(id: number, user:DataUser): Observable<DataUser>{
    return this.httpC.put<DataUser>(`${this.url}users/update/${id}`,user)
  }

  public deleteUser(id: number): Observable<DataUser>{
    return this.httpC.delete<DataUser>(`${this.url}users/delete/${id}`)
  }
}

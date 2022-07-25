import { TokenService } from './../Services/token.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private tokenS: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let intercepReq = req;
    const token = this.tokenS.getToken();

    if(token != null){

      intercepReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+ token)
      })

    }
    return next.handle(intercepReq);
  }
}

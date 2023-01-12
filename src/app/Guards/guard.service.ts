import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { TokenService } from '../Services/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  roleU!: string;

  constructor(private tokenS: TokenService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const expectedRol = route.data['expectedRol'];
    const roles = this.tokenS.getAutorities();
    this.roleU = 'user'

    roles.forEach(rol => {

      if(rol === 'ROL_ADMINISTRATOR'){
        this.roleU = 'admin';
      }
    });

    if(!this.tokenS.getToken() || expectedRol.indexOf(this.roleU) === -1){

      //this.router.navigate(['/'])
      this.toast();
      return false;
    }

    return true;


    
  }

  toast(): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: `Permiso denegado¡¡¡¡¡ `,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

import { AuthService } from './../../../../Services/auth.service';
import { TokenService } from './../../../../Services/token.service';
import { LoginDto } from './../../../../DTO/login-dto';
import { JwtDto } from 'src/app/DTO/jwt-dto';



@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  
 
  roles: string [] = [];
  errorM!: string;
  


  formControl = new FormGroup({
    
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  
  constructor(private dialog: MatDialog, private router: Router, private tokenS: TokenService, private authA: AuthService){

    
  }
  ngOnInit(): void {

    
    
  }

  
  login(){
    //console.log(this.formControl.value);
    const login = this.formControl.value
    this.authA.login(login).subscribe(
       res  => {
        this.isLogged = true,
        this.isLoginFail = false,
        
        this.tokenS.setToken(res.token);
        this.tokenS.setUser(res.user);
        this.tokenS.setAutorities(res.grantedAuthorities);
        this.roles = res.grantedAuthorities;
        

        this.router.navigateByUrl('dashboard')
        console.log( res);
        console.log(this.tokenS.getToken());
        console.log(this.tokenS.getUser());
        console.log(this.tokenS.getAutorities());
        console.log(this.roles)
        

      }
    )
    
    
    
  }

  onNoClick(){
    this.router.navigateByUrl('auth/registro')
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

import { AuthService } from './../../../../Services/auth.service';
import { TokenService } from './../../../../Services/token.service';
import { LoginDto } from './../../../../DTO/login-dto';



@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUser!: any;
  user!: string ;
  password!:string;
  roles: string [] = [];
  errorM!: string;


  formControl = new FormGroup({
    
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  
  constructor(private dialog: MatDialog, private router: Router, private tokenS: TokenService, private authA: AuthService){

    
  }
  ngOnInit(): void {
    if (this.tokenS.getToken()) {

      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenS.getAutorities();
      
    }
  }

  openDialogR():void{
    const dialogR = this.dialog.open(RegisterComponent,{
      width: '250px'
    })
  }

  login(){
    //console.log(this.formControl.value);
    this.loginUser = this.formControl;
    this.authA.login(this.loginUser).subscribe(
      data => {
        this.isLogged = true,
        this.isLoginFail = false,

        
        this.tokenS.setToken(data.token);
        this.tokenS.setUser(data.user);
        this.tokenS.setAutorities(data.autorities);
        this.roles = data.autorities;
        this.router.navigateByUrl('dashboard')
        

      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        
        
        
        console.log('Dto error')
      }
    )
    
    
    
  }

  onNoClick(){
    this.dialog.closeAll()
  }

}

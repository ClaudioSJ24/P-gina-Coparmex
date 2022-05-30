
import { Component, OnInit } from '@angular/core';import { MatDialog } from '@angular/material/dialog';
import { LoginCComponent } from 'src/app/Modules/auth/pages/login-c/login-c.component';


import { RegisterComponent } from 'src/app/Modules/auth/pages/register/register.component';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  
  constructor(public dialog: MatDialog) {}

  
  openDialogR(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '250px'
      
    });
    
  }

  openDialogL(): void{
    const dialogRef = this.dialog.open(LoginCComponent,{
      width: '250px'
    })
  }
}

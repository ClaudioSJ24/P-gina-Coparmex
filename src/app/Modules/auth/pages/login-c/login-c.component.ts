import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent {

  formControl = new FormGroup({
    
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
  constructor(public dialog: MatDialog){}

  openDialogR():void{
    const dialogR = this.dialog.open(RegisterComponent,{
      width: '250px'
    })
  }

}

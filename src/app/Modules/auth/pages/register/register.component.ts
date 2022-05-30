
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginCComponent } from '../login-c/login-c.component';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
  

  formControl = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("^[a-z -']+")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(public dialog: MatDialog) {}

  openDialogS(): void{
    const dialogS = this.dialog.open(LoginCComponent,{
      width: '250px'
    })
  }


  
}

 



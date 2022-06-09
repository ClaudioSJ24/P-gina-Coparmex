import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginCComponent } from 'src/app/Modules/auth/pages/login-c/login-c.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  constructor(private dialog: MatDialog,private router: Router) { }

  dialogL():void{
    this.dialog.open(LoginCComponent,{
      width: '250px'
    })
  }

  logout(): void{
    this.router.navigate(['auth/sesion'])
    this.dialogL()
  }
  

}

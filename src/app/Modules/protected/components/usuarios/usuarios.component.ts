
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataUser } from 'src/app/Interfaces/data';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {

  ELEMENT_DATA: User[] = [];
  id: number = 0;
  action: string = 'eliminado';

  responseUser!: DataUser;

  displayedColumns: string[] = [
    'id',
    'name',
    'lastname',
    'phone',
    'email',
    'password',
    'user',
    'roles',
    'actions',
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userS: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userS.getUsers().subscribe({
      next: (res) => {
       this.dataSource.data = res.responseUser;  
       console.log("respuesta user-> "+res.responseUser)
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeData(id: number){

    this.userS.getUser(id).subscribe( res => {

      this.responseUser = res

      Swal.fire({
        title: `Desea eliminar a socio ${this.responseUser.responseUser.name}`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.value) {
          this.userS.deleteUser(id).subscribe({
            next: () => {
              

              this.toast(
                this.responseUser.responseUser.name,
                this.action
              );
              this.getAllUsers();
              
            },
          });
        }
      });
    });

    


  }

  toast(name: string, action: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: `Usuario ${name} ${action} exitosamente¡¡¡¡¡¡ `,
    });
  }

}

import { ContactResponse } from './../../../../Interfaces/contactResponse';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from 'src/app/Models/contact';
import { UserService } from 'src/app/Services/user.service';
import { TokenService } from 'src/app/Services/token.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { ContactService } from 'src/app/Services/contact.service';
import { DataContact } from 'src/app/Interfaces/data';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  ELEMENT_DATA: Contact[]=[];
  idC: number = 0;

  responseContact!: DataContact;
  action: string = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'lastname',
    'phone',
    'email',
    'company',
    'activity',
    'message',
    'actions'
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 

  constructor(private contactS: ContactService, private tokenS: TokenService) { }

  ngOnInit(): void {
    this.getAllMessages();
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

  getAllMessages(): void{
    this.contactS.getContacts().subscribe({
      next: (res) => {
        
        this.dataSource.data = res.responseContact;
        console.log('Mensajes -> '+res)
        
      }
    })
  }

  removeData(id: number): void {
    const role = this.tokenS.getAutorities();
    role.forEach( rol => {
      if(rol === 'ROL_ADMINISTRATOR'){
        this.contactS.getContact(id).subscribe( 
          (res) => {
            this.responseContact = res;
            Swal.fire({
              title: `Desea eliminar a socio ${this.responseContact.responseContact.name}`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            }).then((result) => {
              if(result.value){
                this.contactS.deleteContact(id).subscribe({
                  next: () => {

                    this.action = 'elimiado';
                    this.toast( this.responseContact.responseContact.name, this.action);
                    this.getAllMessages();
                    

                  }
                  
                  
                })
              }
            })

        })


      }else{

        this.toastE();

      }
    })
  }

  toast(name: string, action: string): void {
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
      icon: 'success',
      title: `Socio ${name} ${action} exitosamente¡¡¡¡¡¡ `,
    });
  }

  toastE(): void {
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
      icon: 'error',
      title: `Permiso Denegado¡¡¡¡¡¡ `,
    });
  }

}

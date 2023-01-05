import { PartnerResponse } from './../../../../Interfaces/partnerResponse';
import { Partner } from 'src/app/Models/partner';
import { PartnerService } from 'src/app/Services/partner.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataResponse } from 'src/app/Interfaces/data';


@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css'],
})
export class SociosComponent implements OnInit {
  ELEMENT_DATA: Partner[] = [];
  id: number = 0;
  action: string = '';

  responsePartner!: DataResponse;
  displayedColumns: string[] = [
    'id',
    'name',
    'lastname',
    'phone',
    'email',
    'company',
    'street',
    'number',
    'colony',
    'codePostal',
    'city',
    'actions',
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private partnerS: PartnerService, private router: Router) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
  }
  ngOnInit(): void {
    this.getAllPartners();
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

  

  

  removeData(id: number) {
    this.partnerS.getPartner(id).subscribe((res) => {
      this.responsePartner = res;

      Swal.fire({
        title: `Desea eliminar a socio ${this.responsePartner.responsePartner.name}`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.value) {
          this.partnerS.deletePartner(id).subscribe({
            next: () => {
              this.action = 'eliminado';

              this.toast(
                this.responsePartner.responsePartner.name,
                this.action
              );
              this.getAllPartners();
              
            },
          });
        }
      });
    });

    
  }

  getAllPartners() {
    this.partnerS.getPartners().subscribe({
      next: (res) => {
        this.dataSource.data = res.responsePartner;

        console.log('Respuesta -> ' + res.responsePartner);
      },
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
      title: `Socio ${name} ${action} exitosamente¡¡¡¡¡¡ `,
    });
  }
}

/** Builds and returns a new User. 
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };

}*/

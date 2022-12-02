import { Partner } from 'src/app/Models/partner';
import { PartnerService } from 'src/app/Services/partner.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  ELEMENT_DATA: Partner[] = [];
  id: number = 0
  

  displayedColumns: string[] = ['id', 'name', 'lastname', 'user', 'actions'];
  
  dataSource = new  MatTableDataSource(this.ELEMENT_DATA)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private partnerS: PartnerService, private router:Router) {
    // Create 100 users
   //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    
  }
  ngOnInit(): void {
    this.getAllPartners()
    
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

  addData() {
    
    
  }

  editData(id: number){}

  removeData(id: number) {

    Swal.fire({
      title: 'warning!',
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.value){

    
        this.partnerS.deletePartner(id).subscribe( {
          next: (data) =>{

            this.getAllPartners()

          }
        }
          
        )
         

    

      }
    })

    
    

    //console.log('el id es eliminada es '+id)
    ///this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    //this.dataSource.setData(this.dataToDisplay);
  }

  getAllPartners(){
    this.partnerS.getPartners().subscribe(
     { next: (res) => {
        this.dataSource.data = res.partner;
        
        
        console.log('Respuesta -> '+res.partner)
        
      }
    }
    )
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



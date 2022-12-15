import { PartnerResponse } from './../../../../../../Interfaces/partnerResponse';
import { Partner } from 'src/app/Models/partner';


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PartnerService } from 'src/app/Services/partner.service';
import Swal from 'sweetalert2';
import { DataResponse } from 'src/app/Interfaces/data';




/** Error when invalid control is dirty, touched, or submitted. */



@Component({
  selector: 'app-nuevo-socio',
  templateUrl: './nuevo-socio.component.html',
  styleUrls: ['./nuevo-socio.component.css']
})
export class NuevoSocioComponent implements OnInit {

  partners! : Partner [] ;

  idPartner: number = 0;

  data!: DataResponse

  partner! :PartnerResponse ;

  action: string = 'Registrar';

  formNew = this.fBuilder.group({
    class: ['partner'],
    idP: [''],
    name: ['', Validators.required],
    lastname: ['',Validators.required],
    phone: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    company: ['', Validators.required],
    address: this.fBuilder.group({
      street: ['', Validators.required],
      number: ['',Validators.required],
      colony: ['', Validators.required],
      codePostal: ['',Validators.required],
      city: ['', Validators.required]
    })
  }) 

 
  

  constructor(private fBuilder: FormBuilder, private route : Router,private partnerS:PartnerService, private arouter: ActivatedRoute ) {

    this.idPartner = +this.arouter.snapshot.paramMap.get('id')!;

    
   }

  ngOnInit(): void {
    this.update()
  }

  update(): void{

    if(this.idPartner!== 0){
      this.action = 'Actualizar'
      this.partnerS.getPartner(this.idPartner).subscribe(
        res =>{ this.data = res

          

          this.formNew.controls['name'].setValue(this.data.responsePartner.name);
          this.formNew.controls['lastname'].setValue(this.data.responsePartner.lastname);
          this.formNew.controls['email'].setValue(this.data.responsePartner.email);
          this.formNew.controls['phone'].setValue(this.data.responsePartner.phone);
          this.formNew.controls['company'].setValue(this.data.responsePartner.company);
          this.formNew.get('address.street')?.setValue(this.data.responsePartner.address.street);
          
          this.formNew.get('address.number')?.setValue(this.data.responsePartner.address.number);

          this.formNew.get('address.colony')?.setValue(this.data.responsePartner.address.colony);

          this.formNew.get('address.codePostal')?.setValue(this.data.responsePartner.address.codePostal);

          this.formNew.get('address.city')?.setValue(this.data.responsePartner.address.city);

          
    
         
        }
      )
      
      
    }
  }

  save(){

   if(!(this.idPartner > 0)){

    const newPartner = this.formNew.value
    this.partnerS.savePartner(newPartner).subscribe( res => {
      console.log("La respuesta es "+res.responsePartner)

      Swal.fire({
        title: 'Socio  '+this.formNew.get('name')?.value+'  Agregado',
        text: "Nombre de socio ",
        timer: 3000,
        icon: 'success',
        
      })
      
      this.route.navigateByUrl("/dashboard")
    })

   }else{

   


   }

   
    

    
  }

  registro(){

  }

}

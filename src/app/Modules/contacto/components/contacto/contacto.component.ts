import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactResponse } from 'src/app/Interfaces/contactResponse';
import { ContactService } from 'src/app/Services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent  {

  formC!: FormGroup;
  response!: ContactResponse;

  constructor(private formBuilder: FormBuilder, private contactS: ContactService){

    this.formC = this.formBuilder.group({

      class: ['contact'],
      idP: [''],
      company: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}$')]],
      activity: ['', Validators.required],
      message: ['', Validators.required],
      

    })

  }

  

  saveContact(): void{

    const newContact = this.formC.value;
    this.contactS.saveContact(newContact).subscribe((res) => {
      this.response = res;
      this.toast();
      
    })
    
  }

  toast(): void {
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
      title: `Gracias por su mensaje, nos comunicaremos con usted a la brevedad posible!!! `,
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  {

  onClick(): void{
    console.log('omitir refresh del boton gracias al modulo FormModule y a la directiva ngSubmit')
  }

}

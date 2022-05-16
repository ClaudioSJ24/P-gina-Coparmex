import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficios-c',
  templateUrl: './beneficios-c.component.html',
  styleUrls: ['./beneficios-c.component.css']
})
export class BeneficiosCComponent implements OnInit {


  content!: Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.content = [

      
      {
        imagen: "../../../../../assets/img/beneficios/turismo.png",
        description:"Beneficios Turisticos"
      },
      {
        imagen: "../../../../../assets/img/beneficios/tecnologia.png",
        description:"Tecnología y Software"
      },
      {
        imagen: "../../../../../assets/img/beneficios/negocio.png",
        description:"Red de Negocios"
      },
      {
        imagen: "../../../../../assets/img/beneficios/viajes.png",
        description:"Descuentos en servicios de Transporte"
      },

      {
        imagen: "../../../../../assets/img/beneficios/restaurantes.png",
        description:"Descuentos en Restaurantes"
      },

      {
        imagen: "../../../../../assets/img/beneficios/medicina.png",
        description:"Salud"
      },

      {
        imagen: "../../../../../assets/img/beneficios/trabajo1.png",
        description:"Bolsa de Trabajo"
      },
      {
        imagen: "../../../../../assets/img/beneficios/asesoria.png",
        description:"Servicios Contables"
      }

    ]

    




  }

}

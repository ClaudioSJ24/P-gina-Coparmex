import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficios-c',
  templateUrl: './beneficios-c.component.html',
  styleUrls: ['./beneficios-c.component.css']
})
export class BeneficiosCComponent implements OnInit {


  content!: Array<any>;
  convenios!: Array<any>;
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

    this.convenios = [
      {
        imagen: "../../../../../assets/img/convenios/aeromexico.jpg",
        name: "Aeromexico",
        icon: "home"
      },

      {
        imagen: "../../../../../assets/img/convenios/alianza.png",
        name: "Alianza Para la Educaión Superior, S.C.",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/anahuac.png",
        name: "Universidad Anáhua",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/aromas.jpg",
        name: "Mil Aromas",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/barrera.jpg",
        name: "Barrera México",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/despro.jpg",
        name: "Despro",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/ethica.png",
        name: "Éthica Abogados Corporativos",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/humanitas.png",
        name: "Universidad Humanitas",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/iberoamericana.jpg",
        name: "Universidad Iberoamericana",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/ieu.png",
        name: "Universidad",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/intercontinental.png",
        name: "Universidad Intercontinental",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/latinoamericana.jpg",
        name: "Universidad Latinoamericana",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/medica.png",
        name: "Médica Sur",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/monterrey.png",
        name: "Tecnológico de Monterrey",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/panamericana.png",
        name: "Universidad Panamericana",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/ruiz.png",
        name: "Laboratorios Ruiz",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/sacristia.png",
        name: "Sacristia de la Compañia",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/salle.jpg",
        name: "Universidad la Salle",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/tekuno.png",
        name: "Transformación e Innovación Digital",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/unitec.jpg",
        name: "Universidad Tecnológica de México",
        icon: "home"
      },

      {
        imagen: "../../../../../assets/img/convenios/uvm.png",
        name: "Universidad",
        icon: "home"
      },
      {
        imagen: "../../../../../assets/img/convenios/upaep.png",
        name: "Universidad",
        icon: "home"
      }

    ]

    




  }

}

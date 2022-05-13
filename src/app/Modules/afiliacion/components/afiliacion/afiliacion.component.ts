import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.css']
})
export class AfiliacionComponent implements OnInit {

  socios!: Array<any>;
  planes!: Array<any>;
   
  constructor() { }

  ngOnInit(): void {
    this.socios = [
      {
        img: "../../../../../assets/img/afiliacion/ado.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/agrovida.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/amaro.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Andrade.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/ANGELES.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Brillante.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/campo.jpg",
       
      },
      {
        img: "../../../../../assets/img/afiliacion/cleaning.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/colegio.png",
       
      },
      {
        img: "../../../../../assets/img/afiliacion/COMEX.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Construcciones.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Conpremex.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Consultora.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/cruz.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/EDUCARES.png",
       
      },
      {
        img: "../../../../../assets/img/afiliacion/enjoy.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/FIT.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Ingenieria.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Joa.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/kolibri.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/leer.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Lezama.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/mabel.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/mezcladito.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/mueganos.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Mylsa.gif",
       
      },
      {
        img: "../../../../../assets/img/afiliacion/Nobleza.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/novias.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/opticas.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/pollo fiesta.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Probox.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/proicat.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/PROSMET.png",
       
      },
      {
        img: "../../../../../assets/img/afiliacion/Qatara.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/raul.jpeg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/sabia.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Serme.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/soliluz.jpeg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/surpriz.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Teksi.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Texturplast.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/TRIUNFO.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/ualis.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/union.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/upaep.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/upt.jpg",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/valdemar.png",
        
      },
      {
        img: "../../../../../assets/img/afiliacion/vedaño.png",
        
      }
    ]

    this.planes = [

      {

        title: "PAQUETE EMPRENDEDOR",
        subtitle: "$ 4,500.00",
        imgs: "../../../../../assets/img/afiliacion/upaep.png"
        
        
      }
    ]

  
  }

}

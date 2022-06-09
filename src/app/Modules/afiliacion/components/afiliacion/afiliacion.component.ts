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
        
        link: "https://www.reservamos.mx/central-autobuses/t-tehuacan-tehuacan"
        
      },
      {
        img: "../../../../../assets/img/afiliacion/agrovida.png",
        link: "https://www.agrovida.com.mx/"
        
        
      },
      {
        img: "../../../../../assets/img/afiliacion/amaro.jpg",
        link: "https://www.grupo-amaro.com/index-2.html"
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Andrade.jpg",
        link: "https://cremeriavaqueritos.com/"
        
      },
      {
        img: "../../../../../assets/img/afiliacion/ANGELES.jpg",
        link: "https://www.valledelosangeles.com/"
        
      },
      {
        img: "../../../../../assets/img/afiliacion/Brillante.jpg",
        link: "https://www.tehuacanbrillante.com/"
      },
      {
        img: "../../../../../assets/img/afiliacion/campo.png",
        link: "https://www.agrovida.com.mx/marcas.html"
      },
      {
        img: "../../../../../assets/img/afiliacion/cleaning.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/colegio.png",
        link: "https://colegiodiscovery.edu.mx/"
      },
      {
        img: "../../../../../assets/img/afiliacion/logoSit.png",
        link: "https://sitarteh.com/web/"
      },
      {
        img: "../../../../../assets/img/afiliacion/Construcciones.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Conpremex.png",
        link: "http://conpremex.com/"
      },
      {
        img: "../../../../../assets/img/afiliacion/Consultora.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/cruz.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/EDUCARES.png",
        link: "http://www.educares.edu.mx/"
      },
      {
        img: "../../../../../assets/img/afiliacion/enjoy.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/FIT.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Ingenieria.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Joa.png",
        link: "https://joasegurosfianzas.miadn.mx/"
      },
      {
        img: "../../../../../assets/img/afiliacion/kolibri.png",
        link: "http://avicola-kolibri.com.mx/web/"
      },
      {
        img: "../../../../../assets/img/afiliacion/leer.jpg",
        link: "https://elartedeleer.com/"
      },
      {
        img: "../../../../../assets/img/afiliacion/Lezama.png",
        link: "https://www.mueblerialezama.online/"
      },
      {
        img: "../../../../../assets/img/afiliacion/mabel.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/mezcladito.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/mueganos.png",
        link: "http://www.mueganos.com/"
      },
      {
        img: "../../../../../assets/img/afiliacion/Mylsa.gif",
        link: "https://www.fordmylsatehuacan.mx/"
      },
      {
        img: "../../../../../assets/img/afiliacion/Nobleza.png",
        link: "http://excelnobleza.com.mx/"
      },
      {
        img: "../../../../../assets/img/afiliacion/novias.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/opticas.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/pollo fiesta.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Probox.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/proicat.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/PROSMET.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Qatara.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/raul.jpeg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/sabia.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Serme.png",
        link: "https://serme.com.mx/directorio-de-unidades-serme/serme-tehuacan-puebla/"
      },
      {
        img: "../../../../../assets/img/afiliacion/soliluz.jpeg",
        link: "https://soliluz.weebly.com/"
      },
      {
        img: "../../../../../assets/img/afiliacion/supriz.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Teksi.png",
        link: "https://www.teksi.mx/"
      },
      {
        img: "../../../../../assets/img/afiliacion/Texturplast.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/TRIUNFO.png",
        link: "https://materialeseltriunfosadecv.miadn.mx/"
      },
      {
        img: "../../../../../assets/img/afiliacion/ualis.png",
        link: "https://www.ualis.org/faq"
      },
      {
        img: "../../../../../assets/img/afiliacion/union.jpg",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/upaep.png",
        link: "https://upaep.mx/tehuacan"
      },
      {
        img: "../../../../../assets/img/afiliacion/upt.jpg",
        link: "https://mexicogob.com/escuelas/upt-universidad-tehuacan-puebla-mexico/"
      },
      {
        img: "../../../../../assets/img/afiliacion/valdemar.png",
        link: "https://www.delagarzamateriasprimas.com/"
      },
      {
        img: "../../../../../assets/img/afiliacion/vedaño.png",
        link: "http://"
      },
      {
        img: "../../../../../assets/img/afiliacion/Lucio.jpg",
        link: "http://"
      }
    ]

    

  
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  imagesForSlider = [
    {path: '../../../../../assets/img/carrousel/imagen1.jpg'},
    {path: '../../../../../assets/img/carrousel/imagen6.jpeg'},
    {path: '../../../../../assets/img/carrousel/imagen8.jpg'},
    {path: '../../../../../assets/img/carrousel/febrero1.jpeg'},
    {path: '../../../../../assets/img/carrousel/mayo7.jpg'},
    {path: '../../../../../assets/img/carrousel/mayo11.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

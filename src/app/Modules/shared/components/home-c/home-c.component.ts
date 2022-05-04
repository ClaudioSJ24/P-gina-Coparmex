import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styles: [
    
  ]
})
export class HomeCComponent implements OnInit {

  imagesForSlider = [
    {path: '../../../../../assets/img/carrousel/imagen1.jpg'},
    {path: '../../../../../assets/img/carrousel/imagen6.jpeg'},
    {path: '../../../../../assets/img/carrousel/imagen8.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

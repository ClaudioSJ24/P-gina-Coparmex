import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  @Input()  title: String = '';

  imagesForSlider = [
    {path: '../../../../../assets/img/nosotros/nosotros4.png'},
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  chooseName(name: string){
    this.title = name;
  }

}

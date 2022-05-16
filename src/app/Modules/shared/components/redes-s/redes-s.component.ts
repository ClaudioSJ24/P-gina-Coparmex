import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-redes-s',
  templateUrl: './redes-s.component.html',
  styleUrls: ['./redes-s.component.css']
})
export class RedesSComponent implements OnInit {

  twitter = faTwitter;
  facebook = faFacebookF;
  linkedin = faLinkedinIn
  instagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}

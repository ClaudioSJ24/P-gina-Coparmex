import { NameService } from './../../../../services/name.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  title: String = 'INICIO';

  itemsMenu!: Array<any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dataService: NameService) {}
  ngOnInit(): void {
    this.itemsMenu = [

      {
        
      },
      {
        name: "INICIO",
        icon: "home",
        router: ['/'],
      },
      {
        name: "NOSOTROS",
        icon: "supervisor_account",
        router: ['/', 'nosotros']
      },
      {
        name: "BENEFICIOS Y SERVICIOS",
        icon: "trending_up",
        router: ['/', 'beneficios']
      },
      {
        name: "AFILIACIÓN",
        icon: "work",
        router: ['/', 'afiliacion']
      },
      {
        name: "EVENTOS",
        icon: "notifications",
        router: ['/', 'eventos']
      },
      {
        name: "CONTACTO",
        icon: "person",
        router: ['/', 'contacto']
      }
      

    ]
  }

}

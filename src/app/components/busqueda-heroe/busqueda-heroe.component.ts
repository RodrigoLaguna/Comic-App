import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html'
})
export class BusquedaHeroeComponent implements OnInit {

  @Input() heroes:Heroe[] = [];
  @Input() termino:string;
  @Input() index:number;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              private router:Router) {
      
   

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes( params['termino'] );
    });
  }

  verHeroe(id:number){
    this.router.navigate( ['/heroe',id] );
  }


}

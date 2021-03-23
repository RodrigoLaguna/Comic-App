import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;


  /**
   * Una función de decorador que marca la propiedad como una forma de que los 
     datos pasen del hijo al padre.

   * heroeSeleccionado - El nombre del Output

   * EventEmitter - Le dice a Angular que cree un nuevo emisor de eventos
   * @param { <number> } number - los datos que emite son de tipo number.

   */
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) { 

    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}

import { Component } from '@angular/core';
import { Ricette } from '../model/ricette';
import { RicetteServiceService } from '../services/ricette-service.service';

@Component({
  selector: 'app-ricerca-component',
  templateUrl: './ricerca-component.component.html',
  styleUrls: ['./ricerca-component.component.css']
})
export class RicercaComponentComponent {

  constructor(public ricetteService :RicetteServiceService){
  }

  cercaRicetta(query: string){
    // this.ricetteService.ElencoRicette();

    if(query.length != 0){
      console.log(this.ricetteService.listaRicette);
      console.log(query);
      this.ricetteService.listaRicette = this.ricetteService.listaRicette.filter((ricetta) => ricetta.nome.includes(query.toUpperCase()));
      console.log(this.ricetteService.listaRicette);
    }else{
      this.ricetteService.ElencoRicette();
      console.log("query vuota " + this.ricetteService.listaRicette);
    }
   
  }
}

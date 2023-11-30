import { Component } from '@angular/core';
import { Ricette } from '../model/ricette';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ingrediente } from '../model/ingrediente';

@Component({
  selector: 'app-ricerca-component',
  templateUrl: './ricerca-component.component.html',
  styleUrls: ['./ricerca-component.component.css']
})
export class RicercaComponentComponent {

  constructor(public ricetteService :RicetteServiceService){
  }

  cercaRicetta(nomeRicetta: string, nomeIngrediente: string){
    // this.ricetteService.ElencoRicette();

    if(nomeRicetta.length != 0 || nomeIngrediente.length != 0){
      
      this.ricetteService.listaRicette = this.ricetteService.listaRicette.filter((ricetta) => 
          {
            if(nomeRicetta.length != 0 && nomeIngrediente.length == 0){
              return ricetta.nome.toUpperCase().includes(nomeRicetta.toUpperCase());

            }else if (nomeRicetta.length == 0 && nomeIngrediente.length != 0){
              return ricetta.ingredienti.some((ingrediente) => ingrediente.nome.toUpperCase().includes(nomeIngrediente.toUpperCase()));

            }else{
              return ricetta.nome.includes(nomeRicetta.toUpperCase()) &&  ricetta.ingredienti.some((ingrediente) => ingrediente.nome.toUpperCase().includes(nomeIngrediente.toUpperCase()))  
            }      
          });
        
    }else{
      this.ricetteService.ElencoRicette();
    }
   
  }
}

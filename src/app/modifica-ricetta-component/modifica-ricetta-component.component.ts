import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ricette } from '../model/ricette';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ingrediente } from '../model/ingrediente';

@Component({
  selector: 'app-modifica-ricetta-component',
  templateUrl: './modifica-ricetta-component.component.html',
  styleUrls: ['./modifica-ricetta-component.component.css']
})
export class ModificaRicettaComponentComponent {
  ricetta! : Ricette;
  id!: string;

  constructor(readonly router: ActivatedRoute, public ricetteservice: RicetteServiceService){}
  async ngOnInit(){
    let id = this.router.snapshot.params['id'];

    try{
      this.ricetta = await this.ricetteservice.OttieniRicetta(id); 
      console.log(this.ricetta);   
      id = this.ricetta.id;
    }catch(error){
      console.error(error)
    }
 }
  // this.ricetteservice.modificaRicetta(this.ricetta);

  aggiungiIngrediente(quantita: string, nomeIngrediente: string){
    if(quantita.length != 0 && nomeIngrediente.length != 0){
      this.ricetta.ingredienti.push(new Ingrediente(nomeIngrediente, quantita));
    }
  }

  eliminaIngrediente(nomeIngrediente: string){
    
    console.log(nomeIngrediente);
    this.ricetta.ingredienti = this.ricetta.ingredienti.filter((ingrediente) => ingrediente.nome != nomeIngrediente);

    console.log(this.ricetta);
  }

  aggiungiStepPreparazione(step: string){
    this.ricetta.preparazione.push(step);
  }

  salvaRicetta(){
    this.ricetteservice.modificaRicetta(this.ricetta);
    console.log("Salva ricetta");
  }

}

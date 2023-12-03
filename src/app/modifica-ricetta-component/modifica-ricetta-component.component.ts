import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlHandlingStrategy } from '@angular/router';
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
  

  constructor(readonly router: ActivatedRoute, public ricetteservice: RicetteServiceService, private navRouter : Router){}

  async ngOnInit(){
    this.id = this.router.snapshot.params['id'];
    location.hash = "#top";

    try{
      this.ricetta = await this.ricetteservice.OttieniRicetta(this.id); 
      if(this.ricetta.id == ""){
        
        this.ricetta.nome = "";
        this.ricetta.descrizione = "";
        this.ricetta.difficolta = "";
        this.ricetta.URLimmagine = "";
      }
         
    }catch(error){
      console.error(error)
    }
 }

  aggiungiIngrediente(quantita: string, nomeIngrediente: string){
    if(quantita.length != 0 && nomeIngrediente.length != 0){
      if(this.ricetta.ingredienti == undefined){
        this.ricetta.ingredienti = [];
        this.ricetta.preparazione = [];
      }
      this.ricetta.ingredienti.push(new Ingrediente(nomeIngrediente, quantita));
    }
  }

  eliminaIngrediente(nomeIngrediente: string){
    this.ricetta.ingredienti = this.ricetta.ingredienti.filter((ingrediente) => ingrediente.nome != nomeIngrediente);
  }

  eliminaStepPreparazione(step: string){
    this.ricetta.preparazione = this.ricetta.preparazione.filter((passaggio) => passaggio != step);
  }

  aggiungiStepPreparazione(step: string){
    this.ricetta.preparazione.push(step);
  }

   async salvaRicetta(nomeRicetta: string, tempoPreparazione: string, difficolta: string, descrizione: string, URLimmagine: string){

      if(nomeRicetta != "" && tempoPreparazione != "" && difficolta != "" && descrizione != "" && URLimmagine != ""
          && this.ricetta.ingredienti.length > 0 && this.ricetta.preparazione.length >0){

        this.ricetta.nome = nomeRicetta;
        this.ricetta.tempoTotale = tempoPreparazione;
        this.ricetta.difficolta = difficolta;
        this.ricetta.descrizione = descrizione;
        this.ricetta.URLimmagine = URLimmagine;

        if(this.ricetta.id != undefined){
         this.ricetteservice.modificaRicetta(this.ricetta);

        }else{
          console.log(this.ricetta);
           this.ricetteservice.inserimentoRicetta(this.ricetta);
        }

        await this.ricetteservice.ElencoRicette();
        this.navRouter.navigate(['/home']);
      }else{
        alert("Compilare tutti i campi!!");

      }
  }

  

}

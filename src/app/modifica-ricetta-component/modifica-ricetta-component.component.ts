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
      if(this.ricetta.id == undefined){
        this.ricetta.id = "10";
        this.ricetta.nome = "";
        this.ricetta.descrizione = "";
        this.ricetta.difficolta = "";
        this.ricetta.preparazione = [];
        this.ricetta.ingredienti = [];
        this.ricetta.URLimmagine = "";
      }
         
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
    this.ricetta.ingredienti = this.ricetta.ingredienti.filter((ingrediente) => ingrediente.nome != nomeIngrediente);
  }

  eliminaStepPreparazione(step: string){
    this.ricetta.preparazione = this.ricetta.preparazione.filter((passaggio) => passaggio != step);
  }

  aggiungiStepPreparazione(step: string){
    console.log("preparazione");
    this.ricetta.preparazione.push(step);
  }

   async salvaRicetta(nomeRicetta: string, tempoPreparazione: string, difficolta: string, descrizione: string, URLimmagine: string){
    if(this.id != undefined){ //ho passato un id, sto modificando una ricetta

      if(nomeRicetta != "" && tempoPreparazione != "" && difficolta != "" && descrizione != "" && URLimmagine != ""
          && this.ricetta.ingredienti.length > 0 && this.ricetta.preparazione.length >0){

        this.ricetta.nome = nomeRicetta;
        this.ricetta.tempoTotale = tempoPreparazione;
        this.ricetta.difficolta = difficolta;
        this.ricetta.descrizione = descrizione;
        this.ricetta.URLimmagine = URLimmagine;

        if(this.id != undefined){
         this.ricetteservice.modificaRicetta(this.ricetta);

        }else{
          
           this.ricetteservice.inserimentoRicetta(this.ricetta);
        }

        await this.ricetteservice.ElencoRicette();
        this.navRouter.navigate(['/home']);
      }else{
        alert("Compilare tutti i campi!!");

      }

    }
  }

  

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricette } from '../model/ricette';
import { Ingrediente } from '../model/ingrediente';

@Component({
  selector: 'app-dettagli-ricette-component',
  templateUrl: './dettagli-ricette-component.component.html',
  styleUrls: ['./dettagli-ricette-component.component.css']
})
export class DettagliRicetteComponentComponent {
  ricetta! :Ricette;
  numeroPersone : number = 1;
  ingredienti! : Ingrediente[];

  constructor(private router: ActivatedRoute, private ricettaService:RicetteServiceService){  }

   async ngOnInit(){
      let id = this.router.snapshot.params['id'];
      try{
        this.ricetta = await this.ricettaService.OttieniRicetta(id);

        this.ingredienti = this.ricetta.ingredienti.slice();
        console.log("Ingredienti: " + this.ingredienti);
        console.log("Ricetta: " + this.ricetta.ingredienti);

      }catch(error){
        console.error(error)
      }
   }

   cambioPersone(event: Event, persone: string){
    this.numeroPersone = +persone;
    // const value = (event.target as HTMLInputElement).value;
    // this.numeroPersone = parseInt(value);

    // for(let i = 0; i< this.ricetta.ingredienti.length; i++){
    //   console.log(this.ingredienti);
    //   //if(this.ingredienti[i].quantita != ""  || this.ingredienti[i].quantita.toUpperCase() != "QB")
    //     this.ricetta.ingredienti[i].quantita = (+this.ingredienti[i]  * this.numeroPersone).toString();
    // }
    
  }
   
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Ricette } from '../model/ricette';

@Component({
  selector: 'app-dettagli-ricette-component',
  templateUrl: './dettagli-ricette-component.component.html',
  styleUrls: ['./dettagli-ricette-component.component.css']
})
export class DettagliRicetteComponentComponent {
  ricetta! :Ricette;
  numeroPersone : number = 1;

  constructor(private router: ActivatedRoute, private ricettaService:RicetteServiceService){  }

   async ngOnInit(){
      let id = this.router.snapshot.params['id'];
      try{
        this.ricetta = await this.ricettaService.OttieniRicetta(id);    
      }catch(error){
        console.error(error)
      }
   }

   calcolaDosi(quantita: string){
    const [valore, tipo] = quantita.split(/(\d+)/).filter(Boolean);

    return (parseInt(valore) * this.numeroPersone) + " " +tipo;

   }

   cambioPersone(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.numeroPersone = parseInt(value);

    for(let i = 0; i< this.ricetta.ingredienti.length; i++)
      this.ricetta.ingredienti[i].quantita = this.printAmount(this.ricetta.ingredienti[i].quantita); 
  }

  printAmount(quantita: string){
    const [amountValue, amountUnit] = quantita.split(/(\d+)/).filter(Boolean);
    return (parseInt(amountValue) * this.numeroPersone) + amountUnit;
  }

    
}

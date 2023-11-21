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
  id! :string;

  constructor(private router: ActivatedRoute, private ricettaService:RicetteServiceService){  
  }

   async ngOnInit(){
      let id = this.router.snapshot.params['id'];
      let ricetta = await this.ricettaService.OttieniRicetta(id);
      console.log(ricetta);
   }

    
}

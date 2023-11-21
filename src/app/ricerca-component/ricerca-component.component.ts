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

  ricerca(query: string){
    this.ricetteService.OttieniRicetta(query);
  }
}

import { Component } from '@angular/core';
import { Ricette } from '../model/ricette';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-ricerca-component',
  templateUrl: './ricerca-component.component.html',
  styleUrls: ['./ricerca-component.component.css']
})
export class RicercaComponentComponent {
  DBRicette : Ricette[] = [];

  constructor(){
    // this.DBRicette = 
  }

  ricerca(query: string){
    console.log(query);
  }
}

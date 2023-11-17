import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Ricette } from '../model/ricette';

@Injectable({
  providedIn: 'root'
})
export class RicetteServiceService {
  ricetta! : Ricette;
  listaRicette : Ricette[] = [];
  constructor(private datastorage: DataStorageService) { }

  ElencoRicette() {

    this.datastorage.getRequest('ricette').subscribe({
      next: (data: any) => {
        console.log(data);
        this.listaRicette = data;
      },
      error: (errore: any) => {
        console.log(errore);
        window.alert("ERRORE: " + errore);
      }
    });
  }

  OttieniRicetta(id: string){
    this.datastorage.getRequest(`ricette\\${id}`).subscribe({
      next: (data: any) =>{
        this.ricetta = data;
      },
      error: (errore: any) => {
        console.error(errore);
        window.alert("ERRORE: " + errore);
      }
    });
  }
}

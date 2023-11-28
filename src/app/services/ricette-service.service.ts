import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Ricette } from '../model/ricette';

@Injectable({
  providedIn: 'root'
})
export class RicetteServiceService {
  private readonly API = "http://localhost:3000/ricette/";

  ricetta! : Ricette;
  listaRicette : Ricette[] = [];

  constructor(private datastorage: DataStorageService) { }

  async ElencoRicette() {
    try{
      const dati = await fetch(this.API);
      this.listaRicette = await dati.json();
    }catch(error){
      console.error(error);
    }
  }

  async OttieniRicetta(id: string): Promise<Ricette>{
    var js = await fetch(this.API + id);
    var dato = await js.json();
    const ricetta = new Ricette(
      dato.id,
      dato.nome,
      dato.descrizione,
      dato.ingredienti,
      dato.preparazione,
      dato.tempoTotale,
      dato.difficolta,
      dato.URLimmagine
    );
    return ricetta;
  }

  modificaRicetta(ricetta: Ricette){
    this.datastorage.PutRequest(`${ricetta.id}`, ricetta); //controllare url
  }

  eliminaRicetta(id:string){
    fetch(`${this.API}/${id}`, {
      method: 'DELETE'
    })
      // .then(response => response.json())
      // .then((ricetta: any) => {
      //   c
        
      // });
  }
}

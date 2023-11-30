import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Ricette } from '../model/ricette';
import { JsonPipe } from '@angular/common';

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
    
    fetch(`${this.API}${ricetta.id}`)
    .then(response => response.json())
    .then(data => {
      // Modifica il campo desiderato
      data = ricetta;

      // Effettua una richiesta PATCH per aggiornare l'elemento nel server
      return fetch(`${this.API}${ricetta.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    })
  }

  eliminaRicetta(id:string){
    fetch(`${this.API}${id}`, {
       method: 'DELETE' 
      });      
  }

  inserimentoRicetta(ricetta: Ricette){
    fetch(this.API+ricetta.id,
      {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(ricetta)
      })
    .then(response => response.json())
    .then (data => 
        ricetta.id = 
        data += ricetta
      )
  }
}

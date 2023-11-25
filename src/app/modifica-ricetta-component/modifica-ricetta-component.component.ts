import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ricette } from '../model/ricette';
import { RicetteServiceService } from '../services/ricette-service.service';

@Component({
  selector: 'app-modifica-ricetta-component',
  templateUrl: './modifica-ricetta-component.component.html',
  styleUrls: ['./modifica-ricetta-component.component.css']
})
export class ModificaRicettaComponentComponent {
  ricetta! : Ricette;

  constructor(readonly router: ActivatedRoute, public ricetteservice: RicetteServiceService){}
  async ngOnInit(){
    let id = this.router.snapshot.params['id'];

    try{
      this.ricetta = await this.ricetteservice.OttieniRicetta(id); 
      console.log(this.ricetta);   
    }catch(error){
      console.error(error)
    }
 }
}

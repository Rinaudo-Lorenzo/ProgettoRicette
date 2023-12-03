import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-preview-ricetta',
  templateUrl: './preview-ricetta.component.html',
  styleUrls: ['./preview-ricetta.component.css']
})
export class PreviewRicettaComponent {
  constructor(public ricetteservice: RicetteServiceService, private readonly router: Router){
    this.ricetteservice.ElencoRicette();
    }    

  ngOnInit(): void {
    this.ricetteservice.ElencoRicette();
  }

  //al click sulla card per la preview della ricetta
  mostraDettagli($event: Event, id:string){
    this.router.navigate(['details', id]);
  }

   cancellaRicetta(id:string){
     this.ricetteservice.eliminaRicetta(id);
     this.ricetteservice.ElencoRicette();
  }

  modificaRicetta($event: Event, id:string){
   
    this.router.navigate(['modify', id]);
  }

  inserisciRicetta(){
    this.router.navigate(['modify', ""]);
  }

}

import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-preview-ricetta',
  templateUrl: './preview-ricetta.component.html',
  styleUrls: ['./preview-ricetta.component.css']
})
export class PreviewRicettaComponent {
  constructor(public ricetteservice: RicetteServiceService, private readonly router: Router){  }    

  ngOnInit(): void {
    this.ricetteservice.ElencoRicette();
  }

  //al click sulla card per la preview della ricetta
  mostraDettagli($event: Event, id:string){
    this.router.navigate(['details', id]);
  }
}

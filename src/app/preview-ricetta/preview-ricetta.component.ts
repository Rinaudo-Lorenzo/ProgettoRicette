import { Component } from '@angular/core';
import { RicetteServiceService } from '../services/ricette-service.service';


@Component({
  selector: 'app-preview-ricetta',
  templateUrl: './preview-ricetta.component.html',
  styleUrls: ['./preview-ricetta.component.css']
})
export class PreviewRicettaComponent {
  constructor(public ricetteservice: RicetteServiceService){
    this.test();
  }    

  test(){
    this.ricetteservice.ElencoRicette();
  }
}

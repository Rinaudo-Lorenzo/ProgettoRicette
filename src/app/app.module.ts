import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DettagliRicetteComponentComponent } from './dettagli-ricette-component/dettagli-ricette-component.component';
import { RicercaComponentComponent } from './ricerca-component/ricerca-component.component';
import { PreviewRicettaComponent } from './preview-ricetta/preview-ricetta.component';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ModificaRicettaComponentComponent } from './modifica-ricetta-component/modifica-ricetta-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DettagliRicetteComponentComponent,
    RicercaComponentComponent,
    PreviewRicettaComponent,
    ModificaRicettaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

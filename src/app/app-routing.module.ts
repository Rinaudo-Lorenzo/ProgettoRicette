import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicercaComponentComponent } from './ricerca-component/ricerca-component.component';
import { DettagliRicetteComponentComponent } from './dettagli-ricette-component/dettagli-ricette-component.component';
import { ModificaRicettaComponentComponent } from './modifica-ricetta-component/modifica-ricetta-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: RicercaComponentComponent},
  {path: 'details/:id', component: DettagliRicetteComponentComponent},
  {path: 'modify/:id', component: ModificaRicettaComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

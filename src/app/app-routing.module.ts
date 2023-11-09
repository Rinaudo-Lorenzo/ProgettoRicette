import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicercaComponentComponent } from './ricerca-component/ricerca-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: RicercaComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

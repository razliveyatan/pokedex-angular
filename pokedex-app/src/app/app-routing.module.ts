import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullNamePageComponent } from './full-name-page/full-name-page.component';
import { BirthDatePageComponent } from './birth-date-page/birth-date-page.component';
import { PokemonListPageComponent } from './pokemon-list-page/pokemon-list-page.component';
// import {GeneralRouteGuard} from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/full-name', pathMatch: 'full' },
  { path: 'full-name', component: FullNamePageComponent},
  { path: 'birth-date', component: BirthDatePageComponent},
  { path: 'pokemon-list', component: PokemonListPageComponent},
  { path: '**', redirectTo: '/full-name' }, // Redirect invalid routes to the Full Name page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

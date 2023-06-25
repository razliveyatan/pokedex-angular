import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullNamePageComponent } from './full-name-page/full-name-page.component';
import { BirthDatePageComponent } from './birth-date-page/birth-date-page.component';
import { PokemonListPageComponent } from './pokemon-list-page/pokemon-list-page.component';
import { PokemonSearchBar } from './pokemon-list-page/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonCardListComponent } from './pokemon-list-page/pokemon-card-list/pokemon-card-list.component';
import { PokemonCardItemComponent } from './pokemon-list-page/pokemon-card-list/pokemon-card-item/pokemon-card-item.component';
import { PaginationComponent } from './pokemon-list-page/pagination/pagination.component';
import { PokemonStatsItemComponent } from './pokemon-list-page/pokemon-card-list/pokemon-stats-item/pokemon-stats-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FullNamePageComponent,
    BirthDatePageComponent,
    PokemonListPageComponent,
    PokemonCardListComponent,
    PokemonCardItemComponent,
    PaginationComponent,
    PokemonStatsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    PokemonSearchBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

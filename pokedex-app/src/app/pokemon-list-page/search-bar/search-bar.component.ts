import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor, CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Observable,of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PokemonApiResultsInterface } from 'src/app/interfaces/interfaces';
/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    CommonModule
  ],
})
export class PokemonSearchBar implements OnChanges{
  myControl = new FormControl('');
  @Input() pokemonListItems: PokemonApiResultsInterface[] = [];  
  results:string[] = [];  
  filteredOptions: Observable<string[]> =  of([]);
  @Output() updateRequest: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() updateInitializeRequest: EventEmitter<number[]> = new EventEmitter<number[]>();

  ngOnChanges(changes:SimpleChanges) {    
    if (changes['pokemonListItems'] && !changes['pokemonListItems'].firstChange && changes['pokemonListItems'].currentValue !== undefined) {  
       this.ngOnInit(); 
    }
  }

  ngOnInit() {
    this.results = this.pokemonListItems.map((item:PokemonApiResultsInterface) => item.name);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.results.filter(result => result.toLowerCase().includes(filterValue));
  } 

  onOptionSelected(option: string): void {
    const filteredValue = this.pokemonListItems.filter((pokemon:PokemonApiResultsInterface) => pokemon.name === option);
    if (filteredValue && filteredValue.length > 0){
      const pokeIds:number[] = [];      
      pokeIds.push(Number(filteredValue[0].url.split('/')[6]));
      this.updateRequest.emit(pokeIds);
    }    
  }

  onSearchInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue.trim() === '') {      
      this.updateInitializeRequest.emit();
    }
  } 
}
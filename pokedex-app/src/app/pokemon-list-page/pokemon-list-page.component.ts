import { Component } from '@angular/core';
import { PokemonApiListInterface,PokemonApiResultsInterface , PokemonItemInterface} from '../interfaces/interfaces';
import { PokemonListPageService } from './services/pokemon-list-page.service';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.css']
})
export class PokemonListPageComponent {
  pokemonApiListItems: PokemonApiListInterface | null = null;
  pokemonListItems: PokemonItemInterface[] = [];
  pokemonResultsItems: PokemonApiResultsInterface[] = [];  
  totalCount:number = 0;
  currentPage:number = 1;
  pokemonPagesDictionary: { [key: number]: number[] } = {}; 

  constructor(private pokemonListPageService:PokemonListPageService) {}
  ngOnInit() {
    this.onLoad();
  }  
  onLoad() {
    this.initializeRequest();
  }

  initializeRequest(){
    this.pokemonListPageService.getPokemonsFromApi().subscribe(response => {      
      this.pokemonApiListItems = response as PokemonApiListInterface;        
      const pokemonResults = this.pokemonApiListItems.results.map((item:PokemonApiResultsInterface) => item);
      this.pokemonResultsItems  = [...pokemonResults];
      this.totalCount = this.pokemonApiListItems.results.length;
      this.generatePokemonPagesDictionary(this.pokemonApiListItems);
      if (this.pokemonApiListItems){        
        const pokemonIds = [...Array(12).keys()].map(x => x+1);
        this.fetchPokemonListItems(pokemonIds);        
      }      
    })
  }
  
  handleUpdateRequest(pokemonIds: number[]) {    
    this.fetchPokemonListItems(pokemonIds);
  }

  handleInitializeRequest(){
    this.initializeRequest();
  }

    fetchPokemonListItems(pokemonIds:number[]) {      
        this.pokemonListPageService.getPokemonDetails(pokemonIds).subscribe(response => {
          this.pokemonListItems = response as PokemonItemInterface[];                        
        })
    }

    generatePokemonPagesDictionary(pokemonListItems:PokemonApiListInterface) {
      if (pokemonListItems !== null){
      const pageSize = 12;
      const totalPages = Math.ceil(this.totalCount / pageSize);  
      for (let i = 0; i < totalPages; i++) {
        const start = i * pageSize;
        const end = start + pageSize;
        const pageIds:number[] = pokemonListItems.results.slice(start, end).map((item:PokemonApiResultsInterface) => Number(item.url.split('/')[6]));
        this.pokemonPagesDictionary !== null ? this.pokemonPagesDictionary[i + 1] = pageIds : null;
      }
    }
    this.pokemonPagesDictionary = {...this.pokemonPagesDictionary};
    }
  }

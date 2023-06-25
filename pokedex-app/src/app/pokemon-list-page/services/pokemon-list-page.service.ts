import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonApiListInterface } from 'src/app/interfaces/interfaces';
import { map } from 'rxjs/operators';
import {Observable, forkJoin} from 'rxjs';
import { PokemonItemInterface } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonListPageService {
  constructor(
    private httpClient: HttpClient,    
  ) { }

  private pokemonsListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1118';
  
 
  getPokemonsFromApi(): Observable<PokemonApiListInterface> {
    return this.httpClient.get<PokemonApiListInterface>(this.pokemonsListUrl);
  }

  getPokemonDetails(pokemonIds: number[]): Observable<PokemonItemInterface[]> {
    const requests: Observable<PokemonItemInterface>[] = pokemonIds.map((id) =>
      this.httpClient.get<PokemonItemInterface>(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    );  
    return forkJoin(requests).pipe(
      map((responses: any[]) => {
        const normalizedData: PokemonItemInterface[] = responses.map((response) => {
          const normalizedItem: PokemonItemInterface = {
            id: response.id,
            abilities: response.abilities,
            name:response.forms[0].name,
            weight:response.weight,
            height:response.height,
            imgUrl:response.sprites.front_default,
            stats:response.stats
          };
          return normalizedItem;
        });        
        return normalizedData;
      })
    );
  }
  
}
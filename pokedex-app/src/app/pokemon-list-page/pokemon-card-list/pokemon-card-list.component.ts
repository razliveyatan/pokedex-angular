import { Component, Input, ElementRef,HostListener } from '@angular/core';
import { PokemonItemInterface } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.css']
})
export class PokemonCardListComponent {
  constructor(private elementRef: ElementRef) {}
  @Input() pokemonsList: PokemonItemInterface[] = [];
  selectedPokemon: PokemonItemInterface | null = null;

  openStatItem(statsItem: PokemonItemInterface) {
    this.selectedPokemon = statsItem;
  }

  closeStatItem() {
    this.selectedPokemon = null;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeStatItem();
    }
  }
}

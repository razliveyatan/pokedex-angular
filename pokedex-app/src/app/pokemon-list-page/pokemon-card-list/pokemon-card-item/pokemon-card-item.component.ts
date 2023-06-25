import { Component, Input } from '@angular/core';
import { PokemonItemInterface } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.css']
})
export class PokemonCardItemComponent {
  constructor() {}
  @Input() card:PokemonItemInterface | null = null; 
}
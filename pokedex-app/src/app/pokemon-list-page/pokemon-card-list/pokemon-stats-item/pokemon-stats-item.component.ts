import { Component, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonItemInterface } from 'src/app/interfaces/interfaces';
import { PokemonCardListService } from '../pokemon-card-list-service';

@Component({
  selector: 'app-pokemon-stats-item',
  templateUrl: './pokemon-stats-item.component.html',
  styleUrls: ['./pokemon-stats-item.component.css']
})
export class PokemonStatsItemComponent implements OnDestroy {
  @Input() card: PokemonItemInterface | null = null;
  @Output() closeStatItem = new EventEmitter<void>();
  private subscription: Subscription;

  constructor(private cardListService: PokemonCardListService) {
    this.subscription = this.cardListService.closeStatItem$.subscribe(() => {
      this.closeStatItem.emit();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCloseStatItem(){
    this.closeStatItem.emit();
  }
}
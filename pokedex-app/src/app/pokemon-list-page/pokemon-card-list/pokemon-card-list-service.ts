import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PokemonItemInterface } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardListService {
    private selectedCardSubject = new Subject<PokemonItemInterface>();
    private closeStatItemSubject = new Subject<void>();
    
    selectedCard$ = this.selectedCardSubject.asObservable();
    closeStatItem$ = this.closeStatItemSubject.asObservable();

  openStatItem(card:PokemonItemInterface) {
    this.selectedCardSubject.next(card);
  }

  closeStatItem() {
    this.closeStatItemSubject.next();
  }
}
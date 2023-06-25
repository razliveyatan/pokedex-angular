import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination-component',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  constructor() {
    this.pokemonPagesDictionary = {};
  }  
  @Input() currentPage:number = 1;
  @Input() pokemonPagesDictionary:{ [key: number]: number[] };
  @Output() updateRequest: EventEmitter<number[]> = new EventEmitter<number[]>();

  prevPage:number = 0;
  nextPage:number = 0;
  lastPage:number = 0;
  totalCount:number = 0;

  ngOnChanges(changes:SimpleChanges) {    
    if (changes['pokemonPagesDictionary'] && !changes['pokemonPagesDictionary'].firstChange && changes['pokemonPagesDictionary'].currentValue !== undefined) {           
      const keys = changes['pokemonPagesDictionary'].currentValue !== null ? Object.keys(changes['pokemonPagesDictionary'].currentValue): null;
      if (keys){        
        this.lastPage = Number(keys[keys.length-1]);        
      }
      this.totalCount = this.lastPage;
      this.currentPage = 1;
      this.nextPage = 2;
    }
  }  
  setPrevNextPage(id:string){
    let pokeIds:number[] = [];    
    switch (id){
      case 'getNext':
      case 'nextPage':        
        this.currentPage = this.currentPage + 1;
        pokeIds = this.pokemonPagesDictionary[this.currentPage];
        this.nextPage = this.currentPage + 1;
        break;
      case 'getPrev':                
        this.currentPage = this.currentPage - 1;
        pokeIds = this.pokemonPagesDictionary[this.currentPage];
        this.nextPage = this.currentPage + 1;
        break;      
      case 'lastPage':       
        pokeIds = this.pokemonPagesDictionary[this.lastPage];
        this.currentPage = this.lastPage;
        this.nextPage = 0;        
        break;
      default:
        break;
    }
    
    this.updateRequest.emit(pokeIds);
  }  

  get isCurrentPageBiggerThanOne(): boolean {
    return this.currentPage > 1;
  }

  get isCurrentPageIsLastPage() : boolean{
    return this.currentPage === this.lastPage;
  }

}
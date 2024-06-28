import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {setFilterTermsPokemons} from "../../../../state/filter-pokemons/filter-pokemons.actions";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {selectFilterTermsPokemons} from "../../../../state/filter-pokemons/filter-terms-pokemons.selectors";

@Component({
  selector: 'app-filter-pokemon',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './filter-pokemon.component.html',
  styleUrl: './filter-pokemon.component.scss'
})
export class FilterPokemonComponent implements OnInit{
  timerSearch :  ReturnType<typeof setTimeout>;
  filterTermsPokemons$: Observable<string> ;
  constructor(
    private store: Store
  ){}

  ngOnInit() {
    this.filterTermsPokemons$ = this.store.select(selectFilterTermsPokemons);
  }

  searchPokemon(term:string){
    clearTimeout(this.timerSearch);
    this.timerSearch=setTimeout(() =>{
      this.store.dispatch(setFilterTermsPokemons({ filterTermsPokemons: term }));
    },300);
  }
}

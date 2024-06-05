import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PokemonService} from "../../../services/pokemon.service";
import ModelPokemon from "../../../models/pokemon.model";
import {Store} from "@ngrx/store";
import {setFilterTermsPokemons} from "../../../../state/filter-pokemons/filter-pokemons.actions";

@Component({
  selector: 'app-filter-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './filter-pokemon.component.html',
  styleUrl: './filter-pokemon.component.scss'
})
export class FilterPokemonComponent {
  timerSearch :  ReturnType<typeof setTimeout>;
  constructor(
    private store: Store
  ){}
  searchPokemon(term:string){
    clearTimeout(this.timerSearch);
    this.timerSearch=setTimeout(() =>{
      this.store.dispatch(setFilterTermsPokemons({ filterTermsPokemons: term }));
    },300);
  }
}

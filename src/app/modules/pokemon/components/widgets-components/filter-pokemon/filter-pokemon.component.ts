import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PokemonService} from "../../../services/pokemon.service";
import ModelPokemon from "../../../models/pokemon.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state";
import {termsSelected} from "../../../../state/filter-pokemons/filter-pokemons.actions";
import { reducers } from '../../../../state';
@Component({
  selector: 'app-filter-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './filter-pokemon.component.html',
  styleUrl: './filter-pokemon.component.scss'
})
export class FilterPokemonComponent {
  pokemonList :ModelPokemon[];
  timerSearch :  ReturnType<typeof setTimeout>;
  resultPokemon: boolean = false;
  constructor(
    private pokemonService : PokemonService,
    private store: Store<{terms:string}>
  ){}
  searchPokemon(term:string){
    clearTimeout(this.timerSearch);
    this.timerSearch=setTimeout(() =>{
     this.store.dispatch(termsSelected({terms:term}));
      /*
      this.pokemonService.searchPokemonList(term).subscribe(pokemonlist=>{
        this.pokemonList = pokemonlist;
        this.resultPokemon=pokemonlist.length>0;
      });
      */


    },300);
  }

  goServiceSearchPokemon(term:string){
    this.pokemonService.searchPokemonList(term).subscribe(pokemonList => {
        console.log("SEARCH RESULT");
        console.table(pokemonList);
        this.pokemonList=pokemonList;
      }
    )
  }
}

import { Component,OnInit } from '@angular/core';
import {BorderCardDirective} from "../../directives/border-card.directive";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonTypeColorPipe} from "../../pipes/pokemon-type-color.pipe";
import PokemonModel from "../../models/pokemon.model";
import {Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import ModelPokemon from "../../models/pokemon.model";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import pokemonData from "../../../../datas/pokemon.data";
import * as timers from "timers";
import {FilterPokemonComponent} from "../widgets-components/filter-pokemon/filter-pokemon.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state";


@Component({
  selector: 'app-liste-pokemon',
  standalone: true,
 // providers:  [ PokemonService ],
  imports: [
    BorderCardDirective,
    DatePipe,
    NgForOf,
    PokemonTypeColorPipe,
    NgIf,
    FilterPokemonComponent,
    AsyncPipe
  ],
  templateUrl: './liste-pokemon.component.html',
  styleUrl: './liste-pokemon.component.css'
})

export class ListePokemonComponent implements OnInit{
  pokemonList :ModelPokemon[];

  resultPokemon: boolean = false;

  termeSelectedString$: Observable<string[]>;
  constructor(
    private router: Router,
    private pokemonService : PokemonService,
    private store: Store<AppState>
  ){}

  ngOnInit() {
     this.pokemonService.getPokemonList().subscribe(pokemonList => {
      this.pokemonList = pokemonList;
      this.resultPokemon=pokemonList.length>0;
    });
    this.termeSelectedString$=this.store.select("selectedTerms");
  }





  goToPokemonFiche(pokemon:ModelPokemon){
    this.router.navigate([`/pokemons/${pokemon.id}`])
  }
  deletePokemon(pokemon:ModelPokemon){
    this.pokemonService.deletePokemonById(pokemon).subscribe(() => {
      this.ngOnInit();
    })
  }

  goCreatePokemon(){
    console.log('goCreatePokemon')
    this.router.navigate([`/pokemons/create`])

  }


}

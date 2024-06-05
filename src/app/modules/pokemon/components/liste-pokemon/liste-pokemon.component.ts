import { Component,OnInit,OnChanges } from '@angular/core';
import {BorderCardDirective} from "../../directives/border-card.directive";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonTypeColorPipe} from "../../pipes/pokemon-type-color.pipe";
import {Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import ModelPokemon from "../../models/pokemon.model";
import {Observable, Subscription} from "rxjs";
import {FilterPokemonComponent} from "../widgets-components/filter-pokemon/filter-pokemon.component";
import {Store} from "@ngrx/store";

import {selectFilterTermsPokemons} from "../../../state/filter-pokemons/filter-terms-pokemons.selectors";


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
  //newFilterTermsPokemons: string | undefined;
  filterTermsPokemons$: Observable<string> ;
  subscription: Subscription;

  constructor(
    private router: Router,
    private pokemonService : PokemonService,
    private store: Store
  ){}

  ngOnInit() {
    this.filterTermsPokemons$ = this.store.select(selectFilterTermsPokemons);

    this.pokemonService.getPokemonList().subscribe(pokemonList => {
      this.pokemonList = pokemonList;
      this.resultPokemon=pokemonList.length>0;
    });

    this.subscription = this.filterTermsPokemons$.subscribe((filterTermsPokemons) => {
      this.onFilterTermsPokemonsChange(filterTermsPokemons);
    });
  }

  onFilterTermsPokemonsChange(filterTermsPokemons: string) {
    console.log('filterTermsPokemons has changed:', filterTermsPokemons);
    this.goServiceSearchPokemon(filterTermsPokemons);
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
  goServiceSearchPokemon(term:string){
    this.pokemonService.searchPokemonList(term).subscribe(pokemonList => {
        console.log("SEARCH RESULT");
        console.table(pokemonList);
        this.pokemonList=pokemonList;
      }
    )
  }

}

import { Component,OnInit } from '@angular/core';
import {BorderCardDirective} from "../../directives/border-card.directive";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonTypeColorPipe} from "../../pipes/pokemon-type-color.pipe";
import PokemonModel from "../../models/pokemon.model";
import {Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import ModelPokemon from "../../models/pokemon.model";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import pokemonData from "../../../../datas/pokemon.data";
import * as timers from "timers";


@Component({
  selector: 'app-liste-pokemon',
  standalone: true,
 // providers:  [ PokemonService ],
  imports: [
    BorderCardDirective,
    DatePipe,
    NgForOf,
    PokemonTypeColorPipe,
    NgIf
  ],
  templateUrl: './liste-pokemon.component.html',
  styleUrl: './liste-pokemon.component.css'
})

export class ListePokemonComponent implements OnInit{
  pokemonList :ModelPokemon[];
  timerSearch :  ReturnType<typeof setTimeout>;
  resultPokemon: boolean = false;
  //searchTerms = new Subject<string>();
  //pokemons$: Observable<PokemonModel[]>;
  constructor(
    private router: Router,
    private pokemonService : PokemonService
  ){}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(pokemonList => {
      this.pokemonList = pokemonList;
      this.resultPokemon=pokemonList.length>0;
    });
  }

  searchPokemon(term:string){
    clearTimeout(this.timerSearch);
    this.timerSearch=setTimeout(() =>{
      this.pokemonService.searchPokemonList(term).subscribe(pokemonlist=>{
        this.pokemonList = pokemonlist;
        this.resultPokemon=pokemonlist.length>0;
      });
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

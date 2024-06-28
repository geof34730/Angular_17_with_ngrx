import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import  {POKEMONS} from "./datas/pokemon.data";
import ModelPokemon from "./modules/pokemon/models/pokemon.model";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  constructor() { }
  createDb(){
    const pokemon: ModelPokemon[]= POKEMONS;
    console.table(pokemon)
    return { pokemon };
  }






}

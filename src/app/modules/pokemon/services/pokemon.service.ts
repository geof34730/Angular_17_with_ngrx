import { Injectable } from '@angular/core';
import ModelPokemon from "../models/pokemon.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList() : Observable<ModelPokemon[]>{
    return this.http.get<ModelPokemon[]>("api/pokemon").pipe(
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }
  getPokemonById(id: string | null) : Observable<ModelPokemon | undefined>{
    return this.http.get<ModelPokemon>(`api/pokemon/${id}`).pipe(
      tap((pokemon) => console.table(pokemon)),
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    );
  }
  updatePokemonById(pokemon: ModelPokemon) : Observable<ModelPokemon | null>{
    console.log("updatePokemonById")
    const  httpOptions= {
      headers: new HttpHeaders(
        {'content-Type':'application/json'}
      )
    };
    return this.http.put(`api/pokemon`,pokemon,httpOptions).pipe(
      tap((pokemonReturn:any) =>
        console.table(pokemonReturn)
      ),
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }

  addPokemon(pokemon: ModelPokemon) : Observable<ModelPokemon | null>{
    const  httpOptions= {
      headers: new HttpHeaders(
        {'content-Type':'application/json'}
      )
    };
    return this.http.post<ModelPokemon>(`api/pokemon`,pokemon,httpOptions).pipe(
      tap((pokemonReturn:ModelPokemon) =>
        console.table(pokemonReturn)
      ),
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }
  deletePokemonById(pokemon: ModelPokemon) : Observable<ModelPokemon | null>{
    return this.http.delete(`api/pokemon/${pokemon.id}`).pipe(
      tap((pokemonReturn:any) =>
        console.table(pokemonReturn)
      ),
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    );
  }
  searchPokemonList(term :string) : Observable<ModelPokemon[]>{
    return this.http.get<ModelPokemon[]>(`api/pokemon?name=${term}`).pipe(
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }
  getPokemonTypeList() : string[] {
    return [
      "Feu",
      "Normal",
      "Eau",
      "Combat",
      "Poison",
      "Plante",
      "Insect",
      "Eletrik",
      "Fée"
    ];
  }

}

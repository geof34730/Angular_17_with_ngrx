import * as fromFilterPokemons from './filter-pokemons/filter-pokemons.reducer';
import {filterPokemonsReducer} from "./filter-pokemons/filter-pokemons.reducer";


export interface AppState {
  items: any;
  filters: any;
  selectedTerms: string[];
}

export const reducers = {
  items: () => {},
  filters: () => {},
  selectedTerms: fromFilterPokemons.filterPokemonsReducer
};

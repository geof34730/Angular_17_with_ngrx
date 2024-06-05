import {Action, createReducer, on} from '@ngrx/store';
import { setFilterTermsPokemons } from './filter-pokemons.actions';

export const initialState: string = '';

const _filterTermsPokemonsReducer = createReducer(
  initialState,
  on(setFilterTermsPokemons, (state, { filterTermsPokemons }) => filterTermsPokemons)
);

export function filterTermsPokemonsReducer(state: string | undefined, action: Action) {
  return _filterTermsPokemonsReducer(state, action);
}

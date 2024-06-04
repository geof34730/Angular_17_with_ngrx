import {createReducer, on} from '@ngrx/store';
import {termsSelected} from './filter-pokemons.actions';


interface State {
  terms: string;
}

const initialState: State = {
  terms : ''
};

export const filterPokemonsReducer = createReducer(
  initialState,
  on(termsSelected, (state, {terms}) => ({...state, terms:state.terms}))
);


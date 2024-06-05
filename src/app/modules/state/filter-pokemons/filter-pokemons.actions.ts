import { createAction, props } from '@ngrx/store';

export const setFilterTermsPokemons = createAction(
  '[Filter] Set Filter Terms Pokemons',
  props<{ filterTermsPokemons: string }>()
);

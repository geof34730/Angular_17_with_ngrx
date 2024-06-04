import { createAction, props } from '@ngrx/store';

export const termsSelected= createAction(
  '[Pokemons List Page] Terms Selected',
  props<{terms: string}>()
);

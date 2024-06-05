import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectFilterTermsPokemons = createFeatureSelector<string>('filterTermsPokemons');


import { Routes } from '@angular/router';
import {Error404Component} from "./components/error-404/error-404.component";
import {NgModule} from "@angular/core";
import {routesPokemons} from "./modules/pokemon/pokemon.module";
import {BrowserModule, enableDebugTools} from "@angular/platform-browser";
import {ListePokemonComponent} from "./modules/pokemon/components/liste-pokemon/liste-pokemon.component";
import {authGuard} from "./auth.guard";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: "pokemons",
    pathMatch: 'full',

  },
  ...routesPokemons,
  {path: "login", component: LoginComponent},
  { path: '**', component: Error404Component },
];

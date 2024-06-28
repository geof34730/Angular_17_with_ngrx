import { Routes } from '@angular/router';
import {Error404Component} from "./components/error-404/error-404.component";
import {routesPokemons} from "./modules/pokemon/pokemon.route";
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

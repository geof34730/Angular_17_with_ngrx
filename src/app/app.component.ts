import {Component, NgModule, OnInit} from '@angular/core';

import {Router, RouterOutlet} from "@angular/router";
import {DatePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {PokemonModule} from "./modules/pokemon/pokemon.module";
import {PokemonService} from "./modules/pokemon/services/pokemon.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    UpperCasePipe,
    TitleCasePipe,
    PokemonModule,
  ],

  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  ngOnInit() {

  }
  constructor(
    private router: Router,

  ){}

  goHome(){
    this.router.navigate([`/pokemons`]);
  }


  protected readonly Date = Date;
}

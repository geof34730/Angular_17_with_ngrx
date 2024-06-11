import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {DatePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {PokemonModule} from "./modules/pokemon/pokemon.module";
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    UpperCasePipe,
    TitleCasePipe,
    PokemonModule,
    CommonModule,
  ],

  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{


  isLoading: Observable<boolean>;
  constructor(
    private router: Router,
    private loaderService: LoaderService
  ){}


  ngOnInit() {
    this.isLoading = this.loaderService.isLoading;
  }

  goHome(){
    this.router.navigate([`/pokemons`]);
  }


  protected readonly Date = Date;
}

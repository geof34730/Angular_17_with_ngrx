import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import PokemonModel from "../../models/pokemon.model";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonTypeColorPipe} from "../../pipes/pokemon-type-color.pipe";
import {PokemonService} from "../../services/pokemon.service";
import ModelPokemon from "../../models/pokemon.model";

@Component({
  selector: 'app-fiche-pokemon',
  standalone: true,
 // providers:  [ PokemonService ],
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    PokemonTypeColorPipe
  ],
  templateUrl: './fiche-pokemon.component.html',
  styleUrl: './fiche-pokemon.component.css'
})
export class FichePokemonComponent implements OnInit{
  pokemonId : string | null;
  pokemonSelected:ModelPokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService : PokemonService
  ){}

  ngOnInit() {
    this.pokemonId=this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(this.pokemonId)
      .subscribe(pokemonSelected => this.pokemonSelected = pokemonSelected);

  }
  goToPokemonList(){
    this.router.navigate(["/pokemons"])
  }
  goToPokemonEdit(){

    this.router.navigate([`/pokemons/edit/${this.pokemonId}`]);
  }


}

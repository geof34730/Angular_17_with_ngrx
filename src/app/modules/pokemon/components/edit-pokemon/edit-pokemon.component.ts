import { Component } from '@angular/core';
import PokemonModel from "../../models/pokemon.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {FormPokemonComponent} from "../form-pokemon/form-pokemon.component";
import ModelPokemon from "../../models/pokemon.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [
    FormPokemonComponent,
    NgIf
  ],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css'
})
export class EditPokemonComponent {
  pokemonId : string | null;
  pokemon:ModelPokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService : PokemonService
  ){}

  ngOnInit() {
    this.pokemonId=this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(this.pokemonId)
      .subscribe(pokemonSelected => this.pokemon = pokemonSelected);

  }
}

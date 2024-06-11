import {Component, Input, OnInit} from '@angular/core';
import PokemonModel from "../../models/pokemon.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {PokemonTypeColorPipe} from "../../pipes/pokemon-type-color.pipe";
import ModelPokemon from "../../models/pokemon.model";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-form-pokemon',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    PokemonTypeColorPipe,
    FormsModule

  ],
  templateUrl: './form-pokemon.component.html',
  styleUrl: './form-pokemon.component.scss'
})
export class FormPokemonComponent   implements OnInit{
  @Input() pokemon: ModelPokemon ;

  types: string[] ;
  isCreateForm: boolean = true;
  constructor(
    private router: Router,
    private pokemonService : PokemonService
  ){}
  ngOnInit() {
    this.isCreateForm = this.router.url.includes("create");
    console.log(this.isCreateForm);
    this.types=this.pokemonService.getPokemonTypeList();
  }
  onSubmit(){
    if(this.isCreateForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((response) => {
            this.goToPokemonList(response?.id);
          }
        );
      }
    else{
      this.pokemonService.updatePokemonById(this.pokemon)
        .subscribe((pokemon) => {
            this.goToPokemonList();
          }
        );
    }
  }
  hasType(type: string):boolean{
    return this.pokemon.types.includes(type);
  }
  selectType($event: Event, type:string){
    (($event.target as HTMLInputElement).checked) ? this.pokemon.types.push(type) : this.pokemon.types.slice(this.pokemon.types.indexOf(type),1);
  }
  isTypesValid(type:string):boolean{
    return (!((this.pokemon.types.length == 1 && this.hasType(type)) || (this.pokemon.types.length == 3 && this.hasType(type))));
  }
  goToPokemonList(id:number | null = null){
    if(this.isCreateForm) {
      this.router.navigate([`/pokemons/${id}`]);
    }
    else {
      this.router.navigate([`/pokemons/${this.pokemon.id}`]);
    }
  }
}

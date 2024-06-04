import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PokemonService} from "../../modules/pokemon/services/pokemon.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name :string ="";
  password: string ="";
  messageForm: string = "Identifiez-vous";
  constructor(
    private authService : AuthService,
    private router : Router
  ){}

  login(){
    this.setMessageForm();
    this.authService.login(this.name,this.password).subscribe((isLogged: boolean) =>{
      if(isLogged){
        this.router.navigate(["/pokemons"])
      }
      else{
        this.password = "";
        this.setMessageForm();
      }
    })
  }
  setMessageForm(){
    (this.authService.isLogged ?
      this.messageForm = "identification en cours..."
      :
      this.messageForm = "Erreur dans l'authentification !"
    )
  }
}

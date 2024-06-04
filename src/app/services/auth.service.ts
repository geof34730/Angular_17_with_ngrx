import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false


  login(name: string, password: string):Observable<boolean>{

    console.log(`GO PARAMS LOGIN SERVICE ${name} - ${password}`);

    const isLogged = (name=="pokemon" && password=="pokemon");

    console.log(`isLogged: ${isLogged}`)
    return of(isLogged).pipe(
      delay(3000),
      tap(isLogged => this.isLogged = isLogged)
    );
  }

  logOut(){
    this.isLogged=false;
  }

}

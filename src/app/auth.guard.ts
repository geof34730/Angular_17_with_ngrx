import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./services/auth.service";
import {inject} from "@angular/core";


export const authGuard = ():boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.isLogged) {
    router.navigateByUrl('/login')
  }
  return authService.isLogged;
}





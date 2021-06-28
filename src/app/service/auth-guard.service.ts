import { Injectable } from '@angular/core';

import { AuthentificationService } from './authentification.service';


import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
      private router: Router,
      private authenticationService: AuthentificationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const token = localStorage.getItem('token');
      const jwtHelperService = new JwtHelperService();

      if (token && !jwtHelperService.isTokenExpired(token)) {
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }


}

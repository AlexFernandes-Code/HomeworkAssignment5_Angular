import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DefaultService } from '../shared/services/default.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor (public service : DefaultService, public route: Router){}

  canActivate() {
    this.service.isLoggedIn(sessionStorage.getItem('accessToken'));
    if (this.service.validUser == true)
    {
      this.route.navigate(['home']);
      console.log('naaaaaaaaaaaaaah ' + this.service.validUser)
      return false;       
    } 
    else{      
      console.log('yaaaaaaaaaaaaaaah ' + this.service.validUser)
      return true;  
    }
  }
  
}

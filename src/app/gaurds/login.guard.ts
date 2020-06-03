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
    this.service.isLoggedIn(this.service.User?.GUID);
    if (this.service.validUser == false)
    {
      return true;     
    } 
    else{      
      this.route.navigateByUrl('home');
      console.log(this.service.User)
      return false;
    }
  }
  
}

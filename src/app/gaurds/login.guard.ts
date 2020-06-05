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
    if (sessionStorage.getItem('accessToken'))
    {
      this.route.navigate(['home']);     
      return false;       
    } 
    else{            
      return true;  
    }
  }
  
}

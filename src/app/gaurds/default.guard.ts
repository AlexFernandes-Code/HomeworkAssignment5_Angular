import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DefaultService } from '../shared/services/default.service';


@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {

  constructor (public service : DefaultService, public route: Router){}

  canActivate() 
  {   
    if (localStorage.getItem("roleID") == "2") 
      {     
        return true;
      }
    else
      {    
        this.route.navigate(['login']);
        return false;
      }       
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DefaultService } from '../shared/services/default.service';


@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {

  constructor (public service : DefaultService, public route: Router){}

  canActivate() {
    this.service.isLoggedIn(localStorage.getItem("accessTocken"));
    if (this.service.validUser == true)
    {
      console.log("valid user");
      return true;     
    } 
    else{
      console.log('Please login.')
      this.route.navigateByUrl('');
      return false;
    }
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DefaultService } from '../shared/services/default.service';

@Injectable({
  providedIn: 'root'
})
export class EmpGuard implements CanActivate {
  
  constructor (public service : DefaultService, public route: Router){}

  canActivate() 
  {   

    if (sessionStorage.getItem("accessToken"))
    {
      if (localStorage.getItem("roleID") == "2" || localStorage.getItem("roleID") == "1") 
        {     
          return true;
        }
      else
        {    
          this.route.navigate(['error']);
          return false;
        }  
    }
    else{
      this.service.sideBarOpen= false;
      this.service.updateSidebar();
      localStorage.clear();
      this.route.navigate(['login']);
      return false;
    }
     
  }
}
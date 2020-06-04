import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DefaultService } from '../../services/default.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public service: DefaultService, public route: Router) { }

  ngOnInit() { 
      if (this.service.updateHeaderSub==undefined) {
      this.service.updateHeaderSub = this.service.
      updateHeaderEmitter.subscribe((name:string) => {
        this.updateHeader();
      });
    }
  }

  show: boolean;

  toggleSideBar() { 
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  updateHeader(){
    if (!sessionStorage.getItem('accessToken')){
      this.show = false;
      this.route.navigateByUrl('login');
    }
    else {
      this.show = true;
    }
  }  

  Logout(){
    this.service.Logout(sessionStorage.getItem("accessToken")).toPromise().then(value => {
      sessionStorage.clear();
      localStorage.clear();
      this.updateHeader();
      this.service.sideBarOpen = false;

    });
   
  }

}
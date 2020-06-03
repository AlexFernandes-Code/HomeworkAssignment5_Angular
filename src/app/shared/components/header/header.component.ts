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
    this.show = false;
    if (this.service.subsVar==undefined) {
      this.service.subsVar = this.service.
      updateDataInvoke.subscribe((name:string) => {
        this.update();
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

  update(){
    if (!this.service.User){
      this.show = false;
      this.route.navigateByUrl('login');
    }
    else {
      this.show = true;
    }
  }  

  Logout(){
    this.service.Logout(localStorage.getItem("accessToken")).toPromise().then(value => {
      localStorage.clear();
      this.update();
      this.service.sideBarOpen = false;

    });
   
  }

}
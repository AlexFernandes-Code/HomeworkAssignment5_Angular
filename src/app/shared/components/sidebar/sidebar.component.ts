import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public service: DefaultService) { }

  roleID : any;

  ngOnInit(): void {
    if (this.service.updateSidebarSub==undefined) {
      this.service.updateSidebarSub = this.service.
      updateSidebarEmitter.subscribe((name:string) => {
        this.updateSidebar();
      });
    }
  }

  updateSidebar(){
    this.roleID = localStorage.getItem('roleID')
  }

}

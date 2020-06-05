import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(public service: DefaultService) { }

  ngOnInit(): void {
  }

  sideBarToggler(event?) {
    this.service.sideBarOpen = !this.service.sideBarOpen;
  }

}

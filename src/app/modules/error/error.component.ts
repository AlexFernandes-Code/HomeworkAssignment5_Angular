import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(public service: DefaultService) { }

  ngOnInit(): void {
    this.service.sideBarOpen = false;
    this.service.updateSidebar();
  }

}

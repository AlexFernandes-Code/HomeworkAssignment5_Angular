import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public service: DefaultService) { }

  ngOnInit(): void {
  }

}

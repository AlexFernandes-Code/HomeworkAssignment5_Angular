import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(public service: DefaultService) { }

  listOrder: Order[];
  showError: boolean;
  errorMessage: string;

  ngOnInit(): void {
    this.service.sideBarOpen = true;
    this.service.updateHeader();
    this.service.updateSidebar();
    this.listOrder = null;
    this.service.getOrders(sessionStorage.getItem('accessToken')).subscribe(
      (res: any) => {        
        if (res.Error)  {
          this.errorMessage = res.Error; 
          this.showError = true; 
        }     
        else{
          this.listOrder = res;
          this.showError = false;
        }
    });
  }

}

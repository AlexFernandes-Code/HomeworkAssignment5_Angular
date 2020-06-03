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

  ngOnInit(): void {
    this.service.getOrders().toPromise().then(res=> this.listOrder = res as Order[]);;
  }

}

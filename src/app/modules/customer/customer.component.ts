import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {

  constructor(public service: DefaultService) { }

  listCustomer: Customer[];

  ngOnInit(): void {
    this.service.getCustomers().toPromise().then(res=> this.listCustomer = res as Customer[]);;
  }

}

import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';
import { Customer } from 'src/app/shared/models/customer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {

  constructor(public service: DefaultService) { }

  listCustomer: Customer[];
  showError: boolean;
  errorMessage: string;

  ngOnInit(): void {
    this.service.sideBarOpen = true;
    this.service.updateHeader();
    this.service.updateSidebar();
    this.listCustomer = null;
    this.service.getCustomers(sessionStorage.getItem('accessToken')).subscribe(
      (res: any) => {        
        if (res.Error)  {
          this.errorMessage = res.Error;
          this.showError = true; 
        }     
        else{
          this.listCustomer = res;
          this.showError = false;
        }
    });
  }

}

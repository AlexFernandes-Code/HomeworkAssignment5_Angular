import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';
import { Supplier } from 'src/app/shared/models/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor(public service: DefaultService) { }

  listSupplier: Supplier[];
  showError: boolean;
  errorMessage: string;

  ngOnInit(): void {
    this.service.sideBarOpen = true;
    this.service.updateHeader();
    this.service.updateSidebar();
    this.listSupplier = null;
    this.service.getSuppliers(sessionStorage.getItem('accessToken')).subscribe(
      (res: any) => {        
        if (res.Error)  {
          this.errorMessage = res.Error;
          this.showError = true; 
        }     
        else{
          this.listSupplier = res;
          this.showError = false;
        }
    });
  }

}

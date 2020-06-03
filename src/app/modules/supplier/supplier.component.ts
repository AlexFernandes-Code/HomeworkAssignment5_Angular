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

  ngOnInit(): void {
    this.service.getSuppliers().toPromise().then(res=> this.listSupplier = res as Supplier[]);;
  }

}

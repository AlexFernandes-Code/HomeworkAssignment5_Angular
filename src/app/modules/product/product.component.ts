import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { DefaultService } from 'src/app/shared/services/default.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public service: DefaultService) { }

  listProduct: Product[];

  ngOnInit(): void {
    this.service.getProducts().toPromise().then(res=> this.listProduct = res as Product[]);;
  }

}

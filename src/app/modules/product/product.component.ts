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
  showError: boolean;
  errorMessage: string;

  ngOnInit(): void {
    this.listProduct = null;
    this.service.getProducts(sessionStorage.getItem('accessToken')).subscribe(
      (res: any) => {        
        if (res.Error)  {
          this.errorMessage = res.Error;
          this.showError = true; 
        }     
        else{
          this.listProduct = res;
          this.showError = false;
        }
    });
  }

}

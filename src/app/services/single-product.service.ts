import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {

  productDetail: any = {};
  constructor() { }

  setProduct(product: any) {
    this.productDetail = product;
    console.log('inside service' + this.productDetail);
  }

  getProduct() {
    return this.productDetail;
  }
}

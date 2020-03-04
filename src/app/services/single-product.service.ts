import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {

  productDetail: any = {};
  constructor() { }

  setProduct(product: any) {
    this.productDetail = product;
  }

  getProduct() {
    return this.productDetail;
  }
}

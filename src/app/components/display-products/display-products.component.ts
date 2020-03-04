import { Component, OnInit } from '@angular/core';
import { productDetails } from 'src/app/data';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  productLists: any = [];
  constructor() {
    this.productLists = productDetails;
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  prodDetail: any;
  total = 'Total price';
  price = 'Price';
  size = 'Size';
  quantity = 'Quantity';
  shipping = 'Shipping';
  shippingValue = 'free';
  productArray;
  value = 1;
  constructor() { }

  ngOnInit(): void {
    this.productArray = JSON.parse(localStorage.getItem('products'));
  }

}

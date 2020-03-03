import { Component, OnInit } from '@angular/core';
import { productsList, productDetails } from '../../data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 productLists: any = [];
  constructor() {
    this.productLists = productDetails;
  }
  ngOnInit(): void {
  }

}

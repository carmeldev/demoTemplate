import { Component, OnInit } from '@angular/core';
import { productDetails, trendingProductDetails} from '../../data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 productLists: any = [];
 trendingProductList: any = [];
  constructor() {
    this.productLists = productDetails;
    this.trendingProductList = trendingProductDetails;
  }
  accent = 'accent';
  ngOnInit(): void {
  }

}

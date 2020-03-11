import { Component, OnInit } from '@angular/core';
import { productDetails, trendingProductDetails, gridImageDetails} from '../../data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 productLists: any = [];
 trendingProductList: any = [];
 gridImages : any = [];
  constructor() {
    this.productLists = productDetails;
    this.trendingProductList = trendingProductDetails;
    this.gridImages = gridImageDetails;
  }
  accent = 'accent';
  ngOnInit(): void {
  }

}

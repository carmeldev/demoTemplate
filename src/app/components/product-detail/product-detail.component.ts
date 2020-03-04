import { Component, OnInit, Input } from '@angular/core';
import { SingleProductService } from 'src/app/services/single-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  prodDetail: any;
  type = 'Type';
  price = 'Price';
  size = 'Size';
  offer = 'Offer';
  category = 'Category';
  constructor(private singleProdService: SingleProductService) { }

  ngOnInit(): void {
    this.prodDetail = this.singleProdService.getProduct();
  }

}

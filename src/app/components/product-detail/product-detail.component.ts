import { Component, OnInit, Input } from '@angular/core';
import { SingleProductService } from 'src/app/services/single-product.service';
import { Router } from '@angular/router';

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
  description = 'Description';
  button1 = 'Buy Now';
  button2 = 'Add to Cart';
  flag = 0;
  productArray = JSON.parse(localStorage.getItem('products'));
  // productArray = [];
  constructor(private singleProdService: SingleProductService, private router: Router) { }

  ngOnInit(): void {
    this.prodDetail = this.singleProdService.getProduct();
  }

  addToCart() {
    this.productArray.forEach(element => {
      if (element.name === this.prodDetail.name) {
        this.flag = 1;
      }
    });
    if (this.flag === 0) {
      this.productArray.push(this.prodDetail);
      localStorage.setItem('products', JSON.stringify(this.productArray));
    }
    this.router.navigate(['add-cart']);
  }

}

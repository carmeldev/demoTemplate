import { Component, OnInit, Input } from '@angular/core';
import { SingleProductService } from 'src/app/services/single-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  @Input() singleProduct: any;
  type = 'Type';
  price = 'Price';
  size = 'Size';
  button1 = 'Buy';
  button2 = 'Add to Cart';
  flag = 0;
  productArray = JSON.parse(localStorage.getItem('products'));
  // productArray = [];
  constructor(private singleProdService: SingleProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  singleProductDetails() {
    this.singleProdService.setProduct(this.singleProduct);
    this.router.navigate(['product-detail']);
  }

  addToCart() {
    this.productArray.forEach(element => {
      if (element.name === this.singleProduct.name) {
        this.flag = 1;
      }
    });
    if (this.flag === 0) {
      this.productArray.push(this.singleProduct);
      localStorage.setItem('products', JSON.stringify(this.productArray));
    }
    this.router.navigate(['add-cart']);
  }
}

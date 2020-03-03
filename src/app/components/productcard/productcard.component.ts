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
  offer = 'Offer';
  category = 'Category';
  button1 = 'Buy';
  button2 = 'Add to Cart';
  constructor(private singleProdService: SingleProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  singleProductDetails() {
    console.log('func called');
    this.singleProdService.setProduct(this.singleProduct);
  }
}

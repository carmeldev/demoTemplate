import { Component, OnInit } from '@angular/core';
import { productDetails } from '../../data';
import { Router } from '@angular/router';
import { SingleProductService } from 'src/app/services/single-product.service';

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.css']
})
export class DateCardComponent implements OnInit {

  products: any;
  button1 = 'Read More...';
  constructor(private router: Router, private singleProdService: SingleProductService) {
    this.products = productDetails;
   }

  ngOnInit(): void {
  }

  singleProductDetails(product) {
    this.singleProdService.setProduct(product);
    this.router.navigate(['product-detail']);
  }

}

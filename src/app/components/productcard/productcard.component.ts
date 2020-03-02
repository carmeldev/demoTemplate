import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  img1 = 'http://images.the-house.com/nike-lunar-stefan-janoski-shoes-game-royal-white-15-1.jpg';
  name1 = 'Nike Lunar Stefan Janoski Skate Shoes';
  type1 = 'Type: Regular Height, Casual Sneakers';
  price1 = 'Price: $ 55';
  size1 = 'Size: Medium';
  offer1 = 'Offer: 50%';
  button1 = 'Buy';
  button2 = 'Add to Cart';
  constructor() { }

  ngOnInit(): void {
  }

}

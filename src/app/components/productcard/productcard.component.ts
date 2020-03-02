import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  type = 'Type';
  price = 'Price';
  size = 'Size';
  offer = 'Offer';
  category = 'Category';
  details = [{img: 'http://images.the-house.com/nike-lunar-stefan-janoski-shoes-game-royal-white-15-1.jpg',
              name: 'Nike Lunar Stefan Janoski Skate Shoes',
              type: 'Regular Height, Casual Sneakers',
              price: '$ 55',
              size: 'Medium',
              offer: '50%',
              category: 'Men'
            },
            {img: 'http://4.bp.blogspot.com/-6VHcwOb2jnE/UMm84nhvaVI/AAAAAAAAEqo/nWNpQ8HASXM/s1600/nike_ladies_pink_shoes.JPG',
            name: 'New Brands Nike Shoes 4 Winter Season',
            type: 'Winter shoe',
            price: '$ 60',
            size: 'Small',
            offer: '30%',
            category: 'Women'
            },
            {img: 'http://images.esellerpro.com/2379/I/697/71/KS40005S%20SILVER.jpg',
            name: 'High Mid Heel Diamante Party Sandals',
            type: 'White sandals',
            price: '$ 48',
            size: 'Medium',
            offer: '20%',
            category: 'Kids'
            },
            {img: 'https://starpathdesign.files.wordpress.com/2014/10/leather-red-high-heel-shoes.jpeg',
            name: 'Red High Heels',
            type: 'High heels',
            price: '$ 62',
            size: 'Large',
            offer: '35%',
            category: 'Women'
            }];
  button1 = 'Buy';
  button2 = 'Add to Cart';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { productDetails } from '../../data';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {

  constructor() {
   }

  @Input() products: any = [];

  ngOnInit(): void {
    console.log(this.products);
  }

}

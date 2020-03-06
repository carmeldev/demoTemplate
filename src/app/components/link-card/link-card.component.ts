import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css']
})
export class LinkCardComponent implements OnInit {
  @Input() products:any;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.products);
  }

}

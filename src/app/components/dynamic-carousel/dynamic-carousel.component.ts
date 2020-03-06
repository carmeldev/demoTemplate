import { Component, OnInit, Input } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { CarousalConfiguration } from './constants/configuration';

@Component({
  selector: 'app-dynamic-carousel',
  templateUrl: './dynamic-carousel.component.html',
  styleUrls: ['./dynamic-carousel.component.css']
})
export class DynamicCarouselComponent extends CarousalConfiguration implements OnInit {

  @Input() interval: string;
  @Input() color: string;
  @Input() proportion: string;
  @Input() slidesCount: string;
  @Input() slides: any;

  constructor() {
    super();
    this.interval = this.interval ? this.interval : this.carousalOptions.interval;
    this.color = this.color ? this.color : this.carousalOptions.color;
    this.proportion = this.proportion ? this.proportion : this.carousalOptions.proportion;
    this.slidesCount = this.slidesCount ? this.slidesCount : this.carousalOptions.slidesCount;
    this.slides = [
      {image: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'},
      {image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'},
      {image: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'},
      {image: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'},
      {image: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'},
    ];
}

  ngOnInit(): void {
  }

}

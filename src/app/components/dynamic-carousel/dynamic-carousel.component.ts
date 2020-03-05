import { Component, OnInit, Input } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { CarousalConfiguration } from './constants/configuration';

@Component({
  selector: 'app-dynamic-carousel',
  templateUrl: './dynamic-carousel.component.html',
  styleUrls: ['./dynamic-carousel.component.css']
})
export class DynamicCarouselComponent extends CarousalConfiguration implements OnInit {
 
 
  @Input() interval : String;
  @Input() color : String;
  @Input() proportion : String;
  @Input() slidesCount : String;
  @Input() slides : any;

 
 
  constructor() { 
    super();
    this.interval = this.interval? this.interval: this.carousalOptions.interval;
    this.color = this.color? this.color: this.carousalOptions.color;
    this.proportion = this.proportion? this.proportion: this.carousalOptions.proportion;
    this.slidesCount = this.slidesCount? this.slidesCount: this.carousalOptions.slidesCount;
    this.slides = this.slides? this.slides: this.carousalOptions.slides;
}

  ngOnInit(): void {
  }

}

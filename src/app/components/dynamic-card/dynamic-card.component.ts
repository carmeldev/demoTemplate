import { Component, OnInit } from '@angular/core';
import { dynamicCardDetail } from '../../data';
@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements OnInit {
detail ;
  constructor() {
    this.detail = dynamicCardDetail;
  }

  ngOnInit(): void {
  }

}

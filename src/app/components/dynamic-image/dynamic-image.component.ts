import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-image',
  templateUrl: './dynamic-image.component.html',
  styleUrls: ['./dynamic-image.component.css']
})
export class DynamicImageComponent implements OnInit {
  @Input() images:any; 
  constructor() { }
  
  ngOnInit(): void {
  }
  

}

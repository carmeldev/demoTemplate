import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-navbar',
  templateUrl: './dynamic-navbar.component.html',
  styleUrls: ['./dynamic-navbar.component.css']
})
export class DynamicNavbarComponent implements OnInit {

  navBarData =[
    {
      heading: 'HOME',
      url:'',
      // dropDown:[
      //   {heading: '', url: ''},
      // ]
    },
    {
      heading: 'NEWS',
      url:'',
      // dropDown:[
      //   {heading: '', url: ''},
      // ]
    },
    {
      heading: 'CONTACT',
      url:'',
      // dropDown:[
      //   {heading: '', url: ''},
      // ]
    },
    {
      heading: 'DROPDOWN 1',
      url:'',
      dropDown:[
        {heading: 'LINK1', url: ''},
        {heading: 'LINK2', url: ''},
        {heading: 'LINK2', url: ''},
      ]
    },
    {
      heading: 'DROPDOWN 2',
      url:'',
      dropDown:[
        {heading: 'LINK1', url: ''},
        {heading: 'LINK2', url: ''},
        {heading: 'LINK2', url: ''},
      ]
    },
    {
      heading: 'ABOUT',
      url:'',
      // dropDown:[
      //   {heading: '', url: ''},
      // ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


}

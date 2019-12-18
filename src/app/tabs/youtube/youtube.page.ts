import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {
  segment: string="gameurs";

  Categories=
  [
    {
      id:1,
      name:"Computer"
    },
    {
      id:2,
      name:"Accessories"
    },
    {
      id:3,
      name:"Smartphones"
    },
    {
      id:4,
      name:"Speackers"
    },
    {
      id:1,
      name:"Computer"
    },
    {
      id:2,
      name:"Accessories"
    },
  ]

  constructor(private route : Router) { }

  ngOnInit() {
  }

  gotoproductpage(){
    this.route.navigateByUrl('/tabs/products');
  }

}

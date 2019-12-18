import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

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

  constructor( private route : Router) { }

  ngOnInit() {
  }

  gotoproductpage(){
    this.route.navigateByUrl('/tabs/products');
  }

}

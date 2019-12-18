import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products=[
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    {
      id:1,
      name:"Surface laptop 3",
      price:20
    },
    
  ] 

  constructor( private route: Router) { }

  ngOnInit() {
  }

  details(){
    this.route.navigateByUrl('/tabs/details');
  }

}

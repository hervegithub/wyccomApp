import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reseau',
  templateUrl: './reseau.page.html',
  styleUrls: ['./reseau.page.scss'],
})
export class ReseauPage implements OnInit {

  segment: string="gameurs";

  slideOpts = {
    slidesPerView:1.6,
  };

  constructor(private router: Router ) { }

  voirTout(){
    this.router.navigateByUrl('tabs/channels');
  }

  ngOnInit() {
  }

}

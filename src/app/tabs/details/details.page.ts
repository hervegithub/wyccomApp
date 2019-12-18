import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  product={
      name:"Surface Laptop 3",
      price: 30,
      description:"",
      url:"https://www.amazon.com/Microsoft-Surface-Laptop-Touch-Screen-Memory/dp/B07YNK81F8/ref=sr_1_1?keywords=Surface+Laptop+3&qid=1576507496&s=electronics&sr=1-1",
      plateforme:"Amazone",
      images:["../../../assets/surface1.jpeg", "../../../assets/surface2.jpg", "../../../assets/surface3.jpeg"],
      video:"https://www.youtube.com/watch?v=2d3k7PU67H0",
  }

  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  watchVideo(){
    this.videoPlayer.play(this.product.video).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

}

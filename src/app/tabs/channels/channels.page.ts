import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

  channels=[
    {
      title:"Test pes 2019 on Live",
      soustitre:"OliGamer",
      img:"../../../assets/gamer1.jpg",
      vue:2.3,
      time:3
    },
    {
      title:"Test pes 2019 on Live",
      img:"../../../assets/gamer2.jpg",
      soustitre:"OliGamer",
      vue:2.3,
      time:3
    },
    {
      title:"Test pes 2019 on Live",
      img:"../../../assets/gamer3.jpg",
      soustitre:"OliGamer",
      vue:2.3,
      time:3
    },
    {
      title:"Test pes 2019 on Live",
      img:"../../../assets/gamer1.jpg",
      soustitre:"OliGamer",
      vue:2.3,
      time:3
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}

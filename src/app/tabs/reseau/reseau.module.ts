import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReseauPageRoutingModule } from './reseau-routing.module';

import { ReseauPage } from './reseau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReseauPageRoutingModule
  ],
  declarations: [ReseauPage]
})
export class ReseauPageModule {}

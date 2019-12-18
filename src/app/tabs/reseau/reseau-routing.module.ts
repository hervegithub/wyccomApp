import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReseauPage } from './reseau.page';

const routes: Routes = [
  {
    path: '',
    component: ReseauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReseauPageRoutingModule {}

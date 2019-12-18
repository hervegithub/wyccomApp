import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children :[
      {
        path: 'categorie',
        children :[
          {
            path:"",
            loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
          }
        ]
      },
      {
        path: 'youtube',
        children :[
          {
            path:"",
            loadChildren: () => import('./youtube/youtube.module').then( m => m.YoutubePageModule)
          }
        ]
      },
      {
        path: 'reseau',
        children :[
          {
            path:"",
            loadChildren: () => import('./reseau/reseau.module').then( m => m.ReseauPageModule)
          }
        ]
      },
      {
        path: 'apropos',
        children :[
          {
            path:"",
            loadChildren: () => import('./apropos/apropos.module').then( m => m.AproposPageModule)
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/categorie',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
  ,
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'channels',
    loadChildren: () => import('./channels/channels.module').then( m => m.ChannelsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitLayoutPage } from './split-layout.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: '',
    component: SplitLayoutPage,
    children:[
      {
        path:'home',
        loadChildren: () => import ('./../../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'articles/:id',
        loadChildren: () => import('./../articles/articles.module').then( m => m.ArticlesPageModule)       
      },
      {
        path: 'clients',
        loadChildren: () => import('./../clients/clients.module').then( m => m.ClientsPageModule)
      },
      {
        path: 'client-detail',
        loadChildren: () => import('./../client-detail/client-detail.module').then( m => m.ClientDetailPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitLayoutPageRoutingModule {}

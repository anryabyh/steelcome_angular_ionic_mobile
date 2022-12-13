import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolve } from '../resolvers/userData.resolver';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate:[HomeGuard],
    resolve:{
      userData:UserDataResolve
    },
      children:[{
        path: 'feed',
        loadChildren: () => import('src/app/pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('src/app/pages/statistics/statistics.module').then(m => m.StatisticsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('src/app/pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('src/app/pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path:'',
        redirectTo:'/home/feed',
        pathMatch:'full'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexGuard } from '../guards/index.guard';



import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate:[IndexGuard],
    children:[{
      path: '',
      loadChildren: () => import('src/app/pages/welcome/welcome.module').then(m => m.WelcomePageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
      path: 'signup',
      loadChildren: () => import('src/app/pages/signup/signup.module').then(m => m.SignupPageModule)
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}

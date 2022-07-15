import { Routes } from '@angular/router';

import { TextLayoutComponent } from './layouts/text-laylout/text-layout.component';
import {P404Component} from "./shared/error/404.component";
import {RegisterComponent} from "./shared/register/register.component";
import {P500Component} from "./shared/error/500.component";
import {P403Component} from "./shared/error/403.component";
import {LoginComponent} from "./shared/login/login.component";
import {IdentityVerifyComponent} from "./shared/identity-verify/identity-verify.component";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'verify',
    component: IdentityVerifyComponent,
    data: {
      title: 'Verify Page'
    }
  },
  // {
  //   path: 'reset-password',
  //   component: ForgotPasswordComponent,
  //   data: {
  //     title: 'Forgot Page'
  //   }
  // },
  {
    path: '',
    component: TextLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/text-laylout/text-layout.module').then(x => x.TextLayoutModule)
      }
    ]
  },
  {
    path: '403',
    component: P403Component,
    data: {
      title: 'Page 403'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  { path: '**', component: P404Component }
]

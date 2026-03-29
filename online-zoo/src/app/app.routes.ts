import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./core/layout/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'map',
    loadComponent: () => import('./core/layout/map/map').then((m) => m.Map),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./core/layout/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'zoos',
    loadComponent: () => import('./core/layout/zoos/zoos').then((m) => m.Zoos),
  },
  {
    path: 'login',
    loadComponent: () => import('./core/auth/pages/login/login.js').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./core/auth/pages/register/register.js').then((m) => m.Register),
  },
  // { path: '**', redirectTo: 'home' },
];

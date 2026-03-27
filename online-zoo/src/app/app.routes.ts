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
];

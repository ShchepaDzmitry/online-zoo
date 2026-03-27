import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'map',
    loadComponent: () => import('./features/map/map').then((m) => m.Map),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./features/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'zoos',
    loadComponent: () => import('./features/zoos/zoos').then((m) => m.Zoos),
  },
];

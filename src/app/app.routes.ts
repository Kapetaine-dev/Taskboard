// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';


export const routes: Routes = [
  {
    path: '',
    component: Home,       // route d’accueil
  },
  {
    path: 'about',
    component: About,      // page "À propos"
  },
  {
    path: '**',
    redirectTo: '',                 
  },
];

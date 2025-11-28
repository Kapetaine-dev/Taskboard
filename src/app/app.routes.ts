// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { About } from './about/about';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,       // route d’accueil
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

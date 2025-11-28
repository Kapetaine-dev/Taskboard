// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: About },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks-page/route').then((m) => m.TASK_ROUTES),
  },
];

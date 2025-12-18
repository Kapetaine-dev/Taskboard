import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(m => m.About),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks-page/route').then(m => m.TASK_ROUTES),
  },
  { path: '**', redirectTo: '' },
];

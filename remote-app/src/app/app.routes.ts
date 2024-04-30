import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
];

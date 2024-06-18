import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
const mfe2 = 'mfe2';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./routes/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule(mfe2, './REMOTE_ROUTES').then((m) => m.REMOTE_ROUTES),
  },
];

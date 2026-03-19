import { Routes } from '@angular/router';

import { Get } from './get/get';
import { Post } from './post/post';
import { Put } from './put/put';
import { Delete } from './delete/delete';
export const routes: Routes = [
  { path: '', redirectTo: 'get', pathMatch: 'full' },
  { path: 'get', component: Get },
  { path: 'post', component: Post },
  { path: 'put', component: Put },
  { path: 'delete', component: Delete }
];

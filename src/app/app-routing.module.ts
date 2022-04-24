import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '/dashboard',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: '',
  //       loadChildren:
  //         () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

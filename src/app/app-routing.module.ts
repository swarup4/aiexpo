import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HaggleBotComponent } from './haggle-bot/haggle-bot.component';
import { ProductComponent } from './product/product.component';
import { LinearRegressionComponent } from './machine-learning/linear-regression/linear-regression.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: DashboardComponent
      }, {
        path: 'haggle',
        component: ProductComponent
      }, {
        path: 'linear',
        component: LinearRegressionComponent
      }
    ]
  // }, {
  //   path: 'haggle',
  //   component: HaggleBotComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: ProductComponent
  //     }
  //   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

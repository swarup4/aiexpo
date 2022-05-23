import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { LinearRegressionComponent } from './machine-learning/linear-regression/linear-regression.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


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
        component: ProductComponent,
        canActivate: [AuthGuard]
      }, {
        path: 'linear',
        component: LinearRegressionComponent
      }
    ]
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'signup',
    component: SignupComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

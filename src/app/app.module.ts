import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
// import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './common/contacts/contacts.component';
import { StickerComponent } from './common/sticker/sticker.component';
import { HaggleBotComponent } from './haggle-bot/haggle-bot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ChatComponent } from './chat/chat.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';


import { ChatService } from './chat/chat.service';
import { LogisticRegressionComponent } from './machine-learning/logistic-regression/logistic-regression.component';
import { LinearRegressionComponent } from './machine-learning/linear-regression/linear-regression.component';
// import { SalesComponent } from './common/sales/sales.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ActivityComponent } from './common/activity/activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SpinnerComponent,
    MainComponent,
    ActivityComponent,
    ContactsComponent,
    StickerComponent,
    HaggleBotComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    ChatComponent,
    BreadcrumbComponent,
    LogisticRegressionComponent,
    LinearRegressionComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FeatherModule.pick(allIcons),
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    // NgApexchartsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

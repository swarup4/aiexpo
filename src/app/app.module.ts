import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { MainComponent } from './main/main.component';
import { ActivityComponent } from './common/activity/activity.component';
import { ContactsComponent } from './common/contacts/contacts.component';
import { StickerComponent } from './common/sticker/sticker.component';
import { VisiterGraphComponent } from './common/visiter-graph/visiter-graph.component';
import { SalesOverviewGrapComponent } from './common/sales-overview-grap/sales-overview-grap.component';
import { HaggleBotComponent } from './haggle-bot/haggle-bot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    SpinnerComponent,
    MainComponent,
    ActivityComponent,
    ContactsComponent,
    StickerComponent,
    VisiterGraphComponent,
    SalesOverviewGrapComponent,
    HaggleBotComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

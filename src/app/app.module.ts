import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { NewBusinesscardComponent } from './newbusinesscard/newbusinesscard.component';
import { BusinesscardListComponent } from './businesscard-list/businesscard-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BusinesscardComponent,
    NewBusinesscardComponent,
    BusinesscardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

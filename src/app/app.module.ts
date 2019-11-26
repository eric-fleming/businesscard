import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { NewBusinesscardComponent } from './newbusinesscard/newbusinesscard.component';
import { BusinesscardListComponent } from './businesscard-list/businesscard-list.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// My services and Guards
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthService } from './service/auth.service';
import { BusinesscardsService } from './service/businesscards.service';


// Web Cam Eventually

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BusinesscardComponent,
    BusinesscardListComponent,
    NewBusinesscardComponent,
    PageNotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    BusinesscardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

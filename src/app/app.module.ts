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
import { UpdateComponent } from './update/update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

// My services and Guards
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthService } from './service/auth.service';
import { BusinesscardsService } from './service/businesscards.service';

// My Pipes for searches
import { FilterFirstNamePipe } from './pipes/filter-first-name.pipe';
import { FilterLastNamePipe } from './pipes/filter-last-name.pipe';
import { FilterCompanyPipe } from './pipes/filter-company.pipe';
import { FilterEmailPipe } from './pipes/filter-email.pipe';
import { FilterPhonePipe } from './pipes/filter-phone.pipe';



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
    SearchComponent,
    UpdateComponent,
    FilterFirstNamePipe,
    FilterLastNamePipe,
    FilterCompanyPipe,
    FilterEmailPipe,
    FilterPhonePipe,
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
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    BusinesscardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

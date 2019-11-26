// Angular Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My components
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { BusinesscardListComponent } from './businesscard-list/businesscard-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewBusinesscardComponent } from './newbusinesscard/newbusinesscard.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Guards
import { AuthGuard } from './guards/auth-guard.guard';

const exData = {

    id: '001',
    firstname: 'Eric',
    lastname: 'Fleming',
    phone: '(224) 723-8678',
    email: 'ericfleming8@gmail.com',
    company: 'DePaul University',
    imageURL: 'assets/images/blankprofilepic.webp'

};

const routes: Routes = [
  { path: 'examplecard', component: BusinesscardComponent, data: exData },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'listofcards', component: BusinesscardListComponent, canActivate: [AuthGuard] },
  { path: 'card', component: BusinesscardComponent, canActivate: [AuthGuard] },
  { path: 'addcard', component: NewBusinesscardComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

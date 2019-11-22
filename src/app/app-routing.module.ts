import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { BusinesscardListComponent } from './businesscard-list/businesscard-list.component';
import { LoginComponent } from './login/login.component';
import { NewBusinesscardComponent } from './newbusinesscard/newbusinesscard.component';
import { AuthGuard } from './guards/auth-guard.guard';

const exData = {
  firstName: 'Eric',
  lastName: 'Fleming',
  phone: '(224) 723-8678',
  email: 'ericfleming8@gmail.com'
};

const routes: Routes = [
  { path: 'examplecard', component: BusinesscardComponent, data: exData },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: BusinesscardComponent, canActivate: [AuthGuard] },
  { path: 'listofcards', component: BusinesscardListComponent, canActivate: [AuthGuard] },
  { path: 'addcard', component: NewBusinesscardComponent, canActivate: [AuthGuard] },
  { path: '**', component: BusinesscardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

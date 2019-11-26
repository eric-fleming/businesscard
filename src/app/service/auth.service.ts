import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from '@angular/fire/auth';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user: Observable<User>;
  message: string;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  login(username: string, password: string) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(username, password)
      .then(value => {
        localStorage.setItem('username', 'user');
        this.message = '';
        console.log('Nice, it worked!', value);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.message = 'Incorrect username or password';
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then(() => {
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
        console.log('Signed out successed');
      });
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
}

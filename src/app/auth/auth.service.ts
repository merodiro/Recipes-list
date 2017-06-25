import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, FirebaseAuthStateObservable } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private router: Router, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signupUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.getToken().then(token => {
          this.router.navigate(['/']);
        });
      })
      .catch(err => console.log(err))
  }

  signinUser(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.getToken().then(token => {
          this.router.navigate(['/']);
        });
      })
      .catch(err => console.log(err))
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  isAuthenticated() {
    return this.user
      .take(1)
      .map(authState => !!authState);
  }

}

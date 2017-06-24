import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDMh19zY0diTN9N4OFRNtDkwUrDG8rtTkg',
      authDomain: 'recipes-book-c860e.firebaseapp.com',
      databaseURL: 'https://recipes-book-c860e.firebaseio.com',
      projectId: 'recipes-book-c860e',
      storageBucket: 'recipes-book-c860e.appspot.com',
      messagingSenderId: '705327038129'
    })
  }

}

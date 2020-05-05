import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBI72_thStFELpr664ujezk2xyLJlPm0GI",
  authDomain: "ginfo4login.firebaseapp.com",
  databaseURL: "https://ginfo4login.firebaseio.com",
  projectId: "ginfo4login",
  storageBucket: "ginfo4login.appspot.com",
  messagingSenderId: "699041693256",
  appId: "1:699041693256:web:c6c78d3d8a368bc133627d",
  measurementId: "G-87FLL47XN6"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

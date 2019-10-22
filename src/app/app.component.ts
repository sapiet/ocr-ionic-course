import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public isAuthenticated = false;

  public menu = [
    {label: 'Book list', path: 'tabs/book-list', requireAuthentication: true},
    {label: 'CD list', path: 'tabs/cd-list', requireAuthentication: true},
    {label: 'Settings', path: 'settings', requireAuthentication: true},
    {label: 'Sign out', method: 'onSignOut', requireAuthentication: true},
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeFirebase();
    });
  }

  navigate(item) {
    if (item.path) {
      this.router.navigate([item.path]);
    } else if (item.method) {
      this[item.method]();
    }

    this.menuCtrl.close();
  }

  onSignOut() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }

  private initializeFirebase() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyB34b3XiwWIWH84EDwPiaWtOSBwCzqYuFc",
      authDomain: "ocr-ionic-1e74e.firebaseapp.com",
      databaseURL: "https://ocr-ionic-1e74e.firebaseio.com",
      projectId: "ocr-ionic-1e74e",
      storageBucket: "ocr-ionic-1e74e.appspot.com",
      messagingSenderId: "331314983610",
      appId: "1:331314983610:web:339d10dbc1678e2371c883",
      measurementId: "G-C2CD70108G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuthenticated = true;
          this.router.navigate(['tabs']);
        } else {
          this.isAuthenticated = false;
          this.router.navigate(['auth', 'sign-in']);
        }
      }
    );
  }
}

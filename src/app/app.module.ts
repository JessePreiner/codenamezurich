import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCQYbUtadvTq3Po9t858QLIVIl_ros1qnk",
    authDomain: "codenamezurich.firebaseapp.com",
    databaseURL: "https://codenamezurich.firebaseio.com",
    storageBucket: "codenamezurich.appspot.com",
    messagingSenderId: "350319442557"
};

const authConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

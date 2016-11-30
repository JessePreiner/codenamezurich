import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';
import { AppComponent } from './app.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MaterialModule } from '@angular/material';
import { PublicationsListComponent } from './publications-list/publications-list.component';
import { PublicationsService } from "./services/publications.service";
import {CharactersService} from "./services/characters.service";
import { CharacterDetailComponent } from './character-detail/character-detail.component';

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
    AppComponent,
    MediaListComponent,
    PublicationsListComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  providers: [PublicationsService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

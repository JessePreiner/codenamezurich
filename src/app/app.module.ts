import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';

import { CodenamezurichRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { PublicationsListComponent } from './publications-list/publications-list.component';
import { PublicationsService } from "./services/publications.service";
import { CharactersService } from "./services/characters.service";
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ManageComponent } from './manage/manage.component';

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
    CharacterListComponent,
    PublicationsListComponent,
    CharacterDetailComponent,
    InventoryComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CodenamezurichRoutingModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  providers: [PublicationsService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

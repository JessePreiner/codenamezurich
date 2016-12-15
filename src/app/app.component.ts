import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  user:any = { 
    email:"", 
    displayName: ""
  };

  constructor(private af:AngularFire) {}

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user.email = user.auth.providerData[0].email;
        this.user.displayName = user.auth.providerData[0].displayName;
        console.log(JSON.stringify(user) );
      } else {
        this.af.auth.login().then(x => console.log(JSON.stringify(x)  ) );
      }
      
    });
  }

  ngOnDestroy() {
    this.af.auth.logout();
  }
}


import { Component } from '@angular/core';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD

=======
import { Platform } from 'ionic-angular';
import { AuthService } from '../providers/auth-service/auth-service';
>>>>>>> primera version


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

<<<<<<< HEAD
  constructor() {}
}
=======
  constructor(
    platform: Platform,
    private auth: AuthService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = 'principal page';
        }
          else{
            this.rootPage = 'login page';
          }
      });
  });
 }
}
>>>>>>> primera version

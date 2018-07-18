import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController,LoadingController, Loading, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
=======
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';  
>>>>>>> primera version

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

<<<<<<< HEAD
  myForm: FormGroup;
  user: Observable<firebase.User>;
  public loading:Loading;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = afAuth.authState;
  }
=======
  user= { email: '', password : ''};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthService,
    public alertCtrl : AlertController,
    private afAuth: AngularFireAuth
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

>>>>>>> primera version
  inicio():void{
    this.navCtrl.push('principal page');
  }
  goToSignup():void{
    this.navCtrl.push('signup page');
  }
  goToResetPassword():void{
    this.navCtrl.push('reset-password page');
  }
<<<<<<< HEAD


  loginUser(){

    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);
   

    this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
      console.log("User logging");
      this.navCtrl.setRoot('principal page');
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
    
=======
  
  login(){
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) => console.log(res));  
>>>>>>> primera version
  }

}
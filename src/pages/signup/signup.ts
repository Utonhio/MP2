import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController,LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
=======
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';  


>>>>>>> primera version

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
<<<<<<< HEAD
   myForm: FormGroup;
   public loading:Loading;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

signup(){

  console.log("Email:" + this.myForm.value.email);
  console.log("Password:" + this.myForm.value.password);
 

  this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
  .then(
    res => {
      let alert = this.alertCtrl.create({

        message: "Gracias por registrarte"
      });
      alert.present();
      this.navCtrl.setRoot('principal page');
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({ 
          message: error.message,
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
  
}

}
=======

  user = { emailregistro : '', passwordregistro : '', passwordverificar : ''};

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
  signin():void{
    if(this.user.passwordregistro == '' || this.user.passwordverificar == ''){
      let alert = this.alertCtrl.create({
        title: 'Tienes que llenar los campos de contraseña',
        subTitle: ('Verifica los campos'),
        buttons: ['Aceptar']
      });
      alert.present();
    }
    else if(this.user.passwordregistro == this.user.passwordverificar){
      this.auth.registerUser(this.user.emailregistro,this.user.passwordregistro)
      .then((user) => {
        // El usuario se ha creado correctamente
      })
      .catch(err=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    }else{
      let alert = this.alertCtrl.create({
        title: 'Las contraseñas que ingresaste no son iguales',
        subTitle: ('Intenta escribir bien las contraseñas'),
        buttons: ['Aceptar']
      });
      alert.present();
    }
    
  }
}
>>>>>>> primera version

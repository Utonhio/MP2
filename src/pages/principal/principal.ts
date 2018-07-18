import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

=======
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';


>>>>>>> primera version
@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, public alertCtrl : AlertController) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    
  }

>>>>>>> primera version
  inicio():void{
    this.navCtrl.push('principal page');
  }
  nosotros():void{
    this.navCtrl.push('nosotros page');
  }
  quehacemos():void{
    this.navCtrl.push('quehacemos page');
  }
  agendarcita():void{
    this.navCtrl.push('agendarcita page');
  }
<<<<<<< HEAD
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
=======
  cerrarSesion(){
    this.auth.logout();
}

} 
>>>>>>> primera version

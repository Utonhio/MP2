import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  registerUser(email:string, password:string){
      return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
      .then((res)=>{
      // El usuario se ha creado correctamente.
      })
      .catch(err=>Promise.reject(err))
  }
  loginUser(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user=>Promise.resolve(user))
      .catch(err=>Promise.reject(err))
  }
  
  get Session(){
    return this.afAuth.authState;
  }  
  logout(){
    this.afAuth.auth.signOut().then(()=>{
      // hemos salido
    })
  }

}


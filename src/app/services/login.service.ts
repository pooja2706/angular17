import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, getIdToken, getIdTokenResult, SignInMethod, signInWithCustomToken, signInWithEmailAndPassword } from 'firebase/auth';
// import { firebasetoken, UidToken } from '../../environment/constants';
import { app } from '../../environment/firebaseenvironment';
// import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  auth=getAuth(app)

  // token: string='';

  constructor(private router: Router){

  }
  // implementlogin(){
  //   if(this.checkToken()){
  //     console.log(localStorage.getItem('token'))
  //     this.loginWithToken(localStorage.getItem('token')||'').then((res)=>{
  //       console.log(res)
  //       return true;
  //     })
  //     .catch((e)=>{
  //       return false;
  //     })
  //   }
  //   else {
  //     this.router.navigateByUrl('login')
  //   }
  //   return false;

  // }

  // checkToken(): boolean{
  //   if(localStorage.getItem('token')){
  //     return true;
  //   }
  //   else return false;
  // }
  // checkWindow() {
  //   // this.token
  //   window.addEventListener('beforeunload',  (e) => {
  //     // if(this.token!=''){
  //     //   localStorage.setItem('token', this.token)
  //     // }
  //     // else{
  //     //   this.token=tokenclass
  //     // localStorage.setItem('token', tokenclass)
  //     // }
  //     e.preventDefault();
  //     e.returnValue = '';
  //   })
  // }

  // getToken(){
  //   return this.token
  // }
  // setToken(token: string){
  //   localStorage.setItem('token', token)
  //   this.token=token
  // }


  // loginWithToken(storedToken: string){
  //   console.log(this.auth);
  //   console.log(storedToken);



  //  return signInWithCustomToken(this.auth, storedToken)
  // }

  loginWithEmailAndPassWord(email: string, password: string){
    // localStorage.setItem('token', this.auth.currentUser)
    return signInWithEmailAndPassword(this.auth, email, password)
  }
}



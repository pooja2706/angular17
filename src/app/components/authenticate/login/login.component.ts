import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { FirebaseSignInProvider } from '@firebase/util';
import { FirebaseOptions } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IS_LOGGED_IN } from '../../../../environment/constants';
import { LoginService } from '../../../services/login.service';

// import * as data from
class obj{
  email: string
  password: string

  constructor(
    email: string,
    password: string
  ){
    this.email=email;
    this.password=password
  }
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  localhost: string='http://localhost:8080/'
  state=false;




  constructor(private http: HttpClient, private router: Router, private Login: LoginService){


    // if(localStorage.getItem('loggedIn')){
    //   this.router.navigateByUrl('')
    // }
    // console.log('dhjfhkjds')
    // if(this.localhost.getItem)
  }
  auth=getAuth()


  loginForm=new FormGroup({
    email: new FormControl('p@gmail.com'),
    password: new FormControl('123456')

  })
  signin(){
    // return this.http.post<obj>((this.localhost+'api/auth/signin'), this.loginForm.value)
  }

  login(){
    this.Login.loginWithEmailAndPassWord(this.loginForm.controls['email'].value || '', this.loginForm.controls['password'].value||'').then((res)=>{
      // this.Login.setToken(''+res.user.uid+'')
      console.log('Login Successful')
      console.log(res.user.uid)
      this.router.navigateByUrl('')
      // .then((r)=>{
      //   console.log(r)
      // })
    })
  }

}

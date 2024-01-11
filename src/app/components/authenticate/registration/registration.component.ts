import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  // localhost: string= 'http://localhost:8080/'

  onFocus: string='';
    registerForm = new FormGroup({
    username:     new FormControl(''),
    email:        new FormControl(''),
    role:         new FormControl(''),
    password:     new FormControl('')
  });
  constructor(private http: HttpClient, private router: Router){
  }
  auth=getAuth()

  // create(){
  //   return this.http.post((this.localhost+'api/auth/signup'), this.registerForm.value)
  // }
  signup(){
    const username=this.registerForm.controls['email'].value||'';
    const password=this.registerForm.controls['password'].value||'';
    console.log(this.auth)
    console.log(username+''+password+'')
    createUserWithEmailAndPassword(this.auth, username, password).then((usercredential)=>{
      console.log(usercredential.user.getIdTokenResult)
      console.log(usercredential.providerId)
      console.log(usercredential.user.uid)
      this.router.navigateByUrl('username')
    }).catch((err)=>{
      console.log(err)
    })
  }

  // sendForm() {
  //   console.log(this.registerForm.value);
    // this.create().subscribe({
    //   next: (res)=>
    //   {
    //   console.log(res)
    //   },
    //   error: (err)=>{
    //     if(err.error.message=="Failed! Username is already in use!"){
    //       console.warn("Failed! Username is already in use!");
    //     }
    //     else if(err.error.message=="Failed! Email is already in use!"){
    //       console.warn("Failed! Username is already in use!");

    //     }
    //     else{
    //       console.log(err.error.message)
    //     }

    //   }
    // },
    // )
  // }


}

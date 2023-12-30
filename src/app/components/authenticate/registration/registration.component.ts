import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  localhost: string= 'http://localhost:8080/'
  onFocus: string='';
    registerForm = new FormGroup({
    username:     new FormControl(''),
    email:        new FormControl(''),
    role:         new FormControl(''),
    password:     new FormControl('')
  });
  constructor(private http: HttpClient){
  }

  create(){
    return this.http.post((this.localhost+'api/auth/signup'), this.registerForm.value)
  }

  sendForm() {
    console.log(this.registerForm.value);
    this.create().subscribe({
      next: (res)=>
      {
      console.log(res)
      },
      error: (err)=>{
        if(err.error.message=="Failed! Username is already in use!"){
          console.warn("Failed! Username is already in use!");
        }
        else if(err.error.message=="Failed! Email is already in use!"){
          console.warn("Failed! Username is already in use!");

        }
        else{
          console.log(err.error.message)
        }

      }
    },
    )
  }


}

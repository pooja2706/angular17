import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';

class obj{
  id: string
  username: string
  email: string
  password: string

  constructor(
    id: string,
    username: string,
    email: string,
    passwrod: string
  ){
    this.id=id;
    this.username=username;
    this.email=email;
    this.password=passwrod
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
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  localhost: string='http://localhost:8080/'
  state=false;
  constructor(private http: HttpClient, private router: Router){
    // if(localStorage.getItem('loggedIn')){
    //   this.router.navigateByUrl('')
    // }
    // console.log('dhjfhkjds')
    // if(this.localhost.getItem)
  }

  loginForm=new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  signin(){
    return this.http.post<obj>((this.localhost+'api/auth/signin'), this.loginForm.value)
  }
  login(){
    this.signin().subscribe(
      {
        next: (res: obj)=>{
          localStorage.setItem('loggedIn', res.id)
          console.log(localStorage.getItem('loggedIn'))
          this.router.navigateByUrl('')

        }
      }
    )
  }
}

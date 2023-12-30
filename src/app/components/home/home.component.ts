import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {Router, RouterModule} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  localhost: string='http://localhost:8080/'
  constructor(private http: HttpClient, private router: Router){}

  signout(){
    return this.http.post((this.localhost+'api/auth/signout'), null)
  }

  logout(){
    this.signout().subscribe({
      next: (res)=>{
        console.log(res);
        localStorage.removeItem('username');
        localStorage.removeItem('loggedIn')
        this.router.navigateByUrl('authenticate')
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent {
  localhost: string='https://localhost:8080/'
  constructor(private http: HttpClient){

  }
  // getall(){
  //   return this.http.get((this.localhost+'api/test/all'))
  // }
}

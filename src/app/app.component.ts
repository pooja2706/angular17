import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { initializeApp } from 'firebase/app';
// import { timeInterval } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { LoginService } from './services/login.service';
import { app } from '../environment/firebaseenvironment';
import { UidToken } from './model/token';
// import { UidToken } from '../environment/constants';
// import { Token } from '@angular/compiler';
const firebaseConfig = {
  apiKey: "AIzaSyCdudbZsQBRfXSfY5EhHM-fgw5LFvSQLWU",
  authDomain: "angular17-c55dd.firebaseapp.com",
  projectId: "angular17-c55dd",
  storageBucket: "angular17-c55dd.appspot.com",
  messagingSenderId: "1055971587346",
  appId: "1:1055971587346:web:29192f4515820070a22fcb",
  measurementId: "G-15FYNKQCPE"
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular17';
  constructor(private Login: LoginService, router: Router){

    const auth=getAuth(app)

    // Login.checkWindow()

    console.log(auth.currentUser)
  }






}

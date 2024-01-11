import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { getAuth } from 'firebase/auth';


import { getFirestore, collection, getDocs, initializeFirestore, doc, setDoc, Firestore, addDoc } from 'firebase/firestore/lite';
import { app } from '../../../../environment/firebaseenvironment';
import { authGuard } from '../../../guards/auth.guard';

@Component({
  selector: 'app-select-username',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButtonModule],
  templateUrl: './select-username.component.html',
  styleUrl: './select-username.component.css'
})
export class SelectUsernameComponent {
  form= new FormGroup({
  username: new FormControl('')
  })

  db=getFirestore(app)

  keyup(){
    console.log(this.form.controls['username'].value)
  }
  constructor(){
  }

  async saveUsername() {
    const auth=getAuth();

    const dbase = await setDoc(doc(this.db, 'users/'+auth.currentUser?.uid+'/diary', 'token'), {
      name: this.form.controls['username'].value||'',
    });

    // console.log(dbase);

  }

}

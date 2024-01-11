import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { DiaryData } from '../../../model/DiaryData';


@Component({
  selector: 'app-homedialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './homedialog.component.html',
  styleUrl: './homedialog.component.css'
})
export class HomedialogComponent {
  formData= new FormGroup({
    name: new FormControl(''),
    body: new FormControl(''),
    // date: new FormControl(Date)
  })
  db=getFirestore()

  constructor(
    public dialogRef: MatDialogRef <HomedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DiaryData,
  ) {
    const auth=getAuth();
    // this.getData()


    console.log(auth.currentUser?.uid)

  }

  saveData(){
    const auth=getAuth();

    const coll=collection(this.db, 'users/'+auth.currentUser?.uid+'/diary')
    addDoc(coll, {
      name: this.formData.controls['name'].value,
      body: this.formData.controls['body'].value,
      date: (new Date()).toLocaleDateString()
    }).then(()=>{
      this.dialogRef.close('saved')
    })

  }




}

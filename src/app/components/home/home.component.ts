import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {Router, RouterModule} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { getAuth } from 'firebase/auth';
import { app } from '../../../environment/firebaseenvironment';
import { SelectUsernameComponent } from '../authenticate/select-username/select-username.component';
import { addDoc, collection, doc, DocumentData, Firestore, getDoc, getDocs, getFirestore, Query, query, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore/lite';
import { MatDialog } from '@angular/material/dialog';
import { HomedialogComponent } from './homedialog/homedialog.component';
import { DiaryData } from '../../model/DiaryData';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    SelectUsernameComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  // localhost: string='http://localhost:8080/'
  // auth=getAuth(app);
  // onFocus: string='Search'
  username: string=''
  db=getFirestore()
  diarydata: DiaryData[] = [];
  auth: any

  search: FormGroup=new FormGroup({
    keyword: new FormControl('')
  })

  constructor(private router: Router, public dialog: MatDialog){
    console.log('here');
    getAuth(app).onAuthStateChanged((user)=>{
      if(user){
        this.auth=user;
        const coll=collection(this.db, 'users'+this.auth.uid)

        console.log(user.uid);
      }
      else{
        console.log('not logged n')
      }
      this.getData()

    });

    // console.log(auth.uid);
  }

  logout(){
    const auth=getAuth();
    auth.signOut().then(()=>{
      console.log(auth)
    })
    localStorage.removeItem('token')
    this.router.navigateByUrl('/')
  }

  createNewDialog(){
    const dialogRef=this.dialog.open(HomedialogComponent,{
      data:{
        name: 'new diary',
        body: 'this is my first diary',
        date: new Date()
      },
      panelClass: 'custom-modalbox'
    })
    dialogRef.afterClosed().subscribe({
      next: (val)=>{
        // console.log(val);
        if(val=='saved'){
          this.getData()
        }

        // this.getData()
      }
    })
  }
  async getData() {

    // const auth=await getAuth();
    // console.log(auth);
    this.diarydata=[]
    this.username= (await getDoc(doc(this.db, 'users/'+ this.auth.uid))).get('name')

    const querySnapshot = await getDocs(collection(this.db, 'users/'+this.auth.uid+'/diary'));
    // querySnapshot.docs

    querySnapshot.forEach((doc) => {
      const d: DiaryData={id: doc.id, name: doc.data()['name'], body: doc.data()['body'], date:  doc.data()['date']||new Date()}

      this.diarydata.push(d)
      // console.log(doc.id, " => ", doc.data());
      // console.log(this.diarydata);

    });

  }

  searchdata(){
    this.search.controls['keyword']
    // console.log(this.keyword+'a');

  }



}

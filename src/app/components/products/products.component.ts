import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { collection, doc, DocumentData, getDoc, getFirestore } from 'firebase/firestore/lite';
import { DiaryData } from '../../model/DiaryData';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productid!: string
  auth
  db=getFirestore()
  coll;
  diarydata: DiaryData={id: '', name: '', body: '', date: new Date}

  constructor(private route: ActivatedRoute){
    this.getid()
    this.auth=getAuth()
    this.coll=doc(this.db, 'users/'+this.auth.currentUser?.uid+'/diary/'+this.productid)
    this.getfield()
  }
  // ngOnInit()
  getid(){
  this.productid=this.route.snapshot.paramMap.get('id') || ''
  console.log(this.productid);
  }

  getfield(){
    // let data;
    getDoc(this.coll).then((d)=>{
      this.diarydata.id=d.id
      this.diarydata.name=d.get('name')
      this.diarydata.body=d.get('body')
      // this.diarydata.name=d.get('name')

    // console.log(data);

    })

  }

}

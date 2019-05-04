import { Component, OnInit ,Inject} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RouterModule,Router, Routes } from '@angular/router';
import { HeaderService } from "./header.service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

interface Post {
  name: string;
  email: string;
  // title: string;
  // content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  header:boolean;
  name:string;
  email:string;
  isValid: boolean = true;
  addPost() {
    this.afs.collection('users').add({'name': this.name, 'email': this.email});
  }
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'firestore';
  constructor( @Inject(LOCAL_STORAGE)private storage: WebStorageService,private afs: AngularFirestore, private router: Router,private headerdata: HeaderService) {}

  ngOnInit() {
    this.headerdata.currentHeader.subscribe(header => this.header = header)
    this.postsCol = this.afs.collection('users');
    this.posts = this.postsCol.valueChanges();
    console.log(this.header+"in app");
    if(this.storage.get('key')){
      this.header=false;
    }
    else{
      this.header=true;
    }
    // if(this.header=="loginfalse"){
    //   this.isValid = true;
    // }
    // else if(this.header=="logintrue"){
    //   this.isValid=false;
    // }
    // this.isValid=this.header;

  }
  logout(){
      localStorage.clear()
      this.router.navigate([''])
      this.header=true;
      
      //this.dataarr['key']= this.storage.get('key');
      //console.log(this.dataarr)
    }
}

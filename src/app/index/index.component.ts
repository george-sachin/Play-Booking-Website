import { Component, OnInit,Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataService } from "../data.service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { HeaderService } from "../header.service";
import { RouterModule,Router, Routes } from '@angular/router';
interface Post {
  // artists:any=[];
  
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  name:string;
  message:string;
  datasession:any;
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'firestore';
  header:boolean;
  constructor(@Inject(LOCAL_STORAGE)private storage: WebStorageService,private headerdata: HeaderService,private afs: AngularFirestore,private router: Router,private data: DataService) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('plays');
    this.posts = this.postsCol.valueChanges();
    this.data.currentMessage.subscribe(message => this.message = message)
   
   
}
onviewall(){
  
  if(this.storage.get('key')){
    this.router.navigate(['allplays'])
  }
  else{
    this.router.navigate(['login']);
  }
}
onplay(i){
  
  // this.name=i;
  // console.log(this.name);
  // this.data.changeMessage(this.name)
  if(this.storage.get('key')){
    this.router.navigateByUrl('playinfo/'+ i );
  }
  else{
    this.router.navigate(['login']);
  }
}
}

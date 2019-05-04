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
  selector: 'app-all-plays',
  templateUrl: './all-plays.component.html',
 
  styleUrls: ['./all-plays.component.scss']
})

  
export class AllPlaysComponent implements OnInit {
  name:string;
  message:string;
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'firestore';
  constructor(@Inject(LOCAL_STORAGE)private storage: WebStorageService,private afs: AngularFirestore,private router: Router,private data: DataService) { }

  ngOnInit() {
    this.postsCol = this.afs.collection('plays');
    this.posts = this.postsCol.valueChanges();
    this.data.currentMessage.subscribe(message => this.message = message)
}
  onplay(i){
    this.router.navigateByUrl('playinfo/'+ i );
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

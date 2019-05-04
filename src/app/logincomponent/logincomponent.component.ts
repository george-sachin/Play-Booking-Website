import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { RouterModule,Router, Routes } from '@angular/router';
import { HeaderService } from "../header.service";
interface Post {
  name: string;
  email: string;
  password: string;
  // title: string;
  // content: string;
  
}
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  name:string;
  email:string;
  userform;
  pwd:string;
  emailval:string;
  header:boolean;
  public dataarr:any=[]
  addPost() {
    this.afs.collection('users').add({'name': this.name, 'email': this.email});
  }
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'firestore';
  users: any;
  details: any;
  constructor(private afs: AngularFirestore, @Inject(LOCAL_STORAGE) private storage: WebStorageService,private router: Router,private headerdata: HeaderService) {}

  ngOnInit() {
    this.headerdata.currentHeader.subscribe(header => this.header = header)
    this.headerdata.changeHeader(true);
    this.userform=new FormGroup({
      emailval:new FormControl("sacgeo001@gmail.com"),
      
      pwd:new FormControl("pass")
    })
    
  }
  
    
  
  login(values){
    this.postsCol = this.afs.collection('users', ref => {
    let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
    query = query.where('email', '==', values.emailval);
    query = query.where('password', '==', values.pwd);
    // query = query.where('time', '>=', new Date(time)).orderBy('time');
    // query = query.orderBy('cost', 'asc');
    return query;
    });
    // console.log(th)
    //console.log(this.posts)
    this.users = this.postsCol.snapshotChanges()
    .map(actions => {
    return actions.map( a => {
    const data = a.payload.doc.data() as Post;
    const id = a.payload.doc.id;
    //this.foundTrips = true;
    // this.foundNumTrips = this.foundNumTrips + 1;
    //console.log(this.foundTrips);
    //this.service2.change_found(this.foundTrips);
    // this.foundTrips= this.foundTrips;
    return { id, data };
    });
    }
    ).subscribe(
    (response: any) => {
    this.details = response;
    console.log(this.details.length);
    if (this.details.length > 0) {
    // this.origin = { lat: 18.5827328, lng: 73.7419264 };
   // console.log("Logged in");
    //console.log(this.details);
    //console.log(this.details[0].data.name);
    this.storage.set('key', this.details[0].data);
    this.dataarr['key']= this.storage.get('key');
    //console.log(this.dataarr)
    this.router.navigate(['main-page'])
    
    }
    }
    );
    //this.posts = this.user.valueChanges();
    //this.posts.subscribe(posts => this.user=posts);
    //this.posts.subscribe(posts => this.user=posts);
    }

    logout(){
      localStorage.clear()
    
      this.header=true;
      this.dataarr['key']= this.storage.get('key');
      //console.log(this.dataarr)
    }
    

    // saveInLocal(key, val): void {
    //   console.log('recieved= key:' + key + 'value:' + val);
    //   this.storage.set(key, val);
    //   this.data[key]= this.storage.get(key);
    // }
    

    // getFromLocal(key): void {
    //   console.log('recieved= key:' + key);
    //   this.data[key]= this.storage.get(key);
    //   console.log(this.data);
    // }


}

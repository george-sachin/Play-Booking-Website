import { Component, OnInit ,Inject} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
interface Post{
 
}
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  datasession:any;
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'firestore';
  history:any;
  details:any;
  rows:any;
  cols:any;
  playid:any;
  seats=[];
  constructor(@Inject(LOCAL_STORAGE)private storage: WebStorageService,private afs: AngularFirestore) { }


  ngOnInit() {
    this.datasession= this.storage.get('key');
    this.postsCol = this.afs.collection('users', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('name', '==', this.datasession.name);
     // query = query.where('password', '==', values.pwd);
      // query = query.where('time', '>=', new Date(time)).orderBy('time');
      // query = query.orderBy('cost', 'asc');
      return query;
      });
      // console.log(th)
      //console.log(this.posts)
      this.history = this.postsCol.snapshotChanges()
      .map(actions => {
      return actions.map( a => {
      const data = a.payload.doc.data() as Post;
      const id = a.payload.doc.id as Post;
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
      console.log(this.details.length)
     // console.log(this.details[0].data.seats);
        //this.seatarr=this.details[0].data.seats;
        console.log(this.details[0].data.seatsbooked);
      
        this.seats=this.details[0].data.seatsbooked

        console.log(this.seats)



    
      }
    //  console.log(this.seatMatrix);
    
  );
  }

}

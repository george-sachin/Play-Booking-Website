import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  name: string;
  email: string;
  // title: string;
  // content: string;
}
@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent implements OnInit {
    loc:string;
    lat: number;
    lng: number;
    theatre: any[];
    postsCol: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;
   Urlicon={
    url: './assets/marker.svg',
    scaledSize: {
        width: 60,
        height: 60
    }
}
    constructor(private afs: AngularFirestore) { }

    ngOnInit() {
      this.getUserLocation()
      this.postsCol = this.afs.collection('theatre');
       this.posts = this.postsCol.valueChanges();
        this.posts.subscribe(posts => this.theatre=posts);
     
    }

    private getUserLocation() {
     /// locate the user
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;

       });
     }
   }
 }
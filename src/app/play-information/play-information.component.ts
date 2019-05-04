import { Component, OnInit,Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataService } from "../data.service";
import { HeaderService } from "../header.service";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {ActivatedRoute, Params} from '@angular/router';
import { RouterModule,Router, Routes } from '@angular/router';
interface Post{
 
  }
@Component({
  selector: 'app-play-information',
  templateUrl: './play-information.component.html',
  styleUrls: ['./play-information.component.scss']
})
export class PlayInformationComponent implements OnInit {
   artists:any;
    description: string;
  director: string;
  titles: string;
  duration: string;
   genre: string;
   temp:any;
    language: string;
   rating: string;
   playingat:any;
   header:boolean;
   postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'firestore';
  plays:any;
  details:any;
  message:string;
  commenta:string;
  data:any;
  oldComments : any;
  oldCommentsseats:any;
  oldplayingat:any;
  updated = false;
  datasession:any=[];
  name:String;
  names:String;
  comments:any;
  area:any;
  cost:any;
  theatre:any;
  date:any;
  time:any;
  seats:any;
  seatsall:any;
  play:{
    name:string
  }
 booking:any;
 seatarr:any;
 playid:any;
 oldPlays:any;
  constructor(@Inject(LOCAL_STORAGE)private storage: WebStorageService,private router: Router,private afs: AngularFirestore,private datas: DataService,private headerdata: HeaderService, private route:ActivatedRoute) { 

 
  }

  ngOnInit() {
    
      
      
    this.datasession['key']= this.storage.get('key');
     this.names=this.datasession['key'].name;
     this.play={
      name:this.route.snapshot.params['name']
    };
    this.route.params.subscribe((params:Params)=>{
      this.play.name=params['name'];
    });
   // console.log(this.play.name)
    this.postsCol = this.afs.collection('plays', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('title', '==', this.play.name);
     // query = query.where('password', '==', values.pwd);
      // query = query.where('time', '>=', new Date(time)).orderBy('time');
      // query = query.orderBy('cost', 'asc');
      return query;
      });
      // console.log(th)
      //console.log(this.posts)
      this.plays = this.postsCol.snapshotChanges()
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
    //  console.log(this.details[0].data.title+this.details[0].data.rating);
        this.artists=this.details[0].data.artists;
        this.titles=this.details[0].data.title;
        this.rating=this.details[0].data.rating;
      //  console.log(this.rating+this.titles)
        this.duration=this.details[0].data.duration;
        this.genre=this.details[0].data.genre;
         this.language=this.details[0].data.language;
          this.playingat=this.details[0].data.playingat;
      //    console.log(this.playingat)
         this.description=this.details[0].data.description;
          this.director=this.details[0].data.director;
          this.comments=this.details[0].data.comments;
      }
      );
      //console.log(this.play.name);
      //console.log(this.details[0].data.title);
     //this.afs.collection('users').add({'name': data.name,'location': data.location, 'email': data.email,'age': data.age,'password': data.password,'dob': data.dob, 'lat':this.lat,'lon':this.lon });
 
     //this.afs.collection('plays').add({'playingat':[]});
     // this.postsCol = this.afs.collection('plays', ref => {
     //   let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
     //   query = query.where('title', '==', this.message.title);
     //   //query = query.where('password', '==', values.pwd);
     //   // query = query.where('time', '>=', new Date(time)).orderBy('time');
     //   // query = query.orderBy('cost', 'asc');
     //   return query;
     //   });

  //    this.headerdata.currentHeader.subscribe(header => this.header = header)
  //    this.header=false;
  //  this.datas.currentMessage.subscribe(message => this.message = message)
  //  console.log("********"+this.datas)
  //  console.log(this.message['title']);
 
  // this.postsCol = this.afs.collection('plays', ref => {
  //   let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
  //   query = query.where('title', '==', this.message['title']);
  //   //query = query.where('password', '==', values.pwd);
  //   // query = query.where('time', '>=', new Date(time)).orderBy('time');
  //   // query = query.orderBy('cost', 'asc');
  //   return query;
  //   }).add({'comment':});

  //console.log(this.datas[0].title)
  //  this.artists=this.details[0].data.artists;
  //   this.titles=this.details[0].data.title;
  // this.rating=this.details[0].data.rating;
  // this.duration=this.details[0].data.duration;
  // this.genre=this.details[0].data.genre;
  //  this.language=this.details[0].data.language;
  //   this.playingat=this.details[0].data.playingat;
  //  this.description=this.details[0].data.description;
  //   this.director=this.details[0].data.director;
  //    this.postsCol = this.afs.collection('plays', ref => {
  //   let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
  //   this.datas.currentMessage.subscribe(message => this.message = message)
  //   console.log(this.message+36);
  //   query = query.where('title', '==', this.message);
  //   //query = query.where('password', '==', values.pwd);
  //   // query = query.where('time', '>=', new Date(time)).orderBy('time');
  //   // query = query.orderBy('cost', 'asc');
  //   return query;
  //   });
  //   // console.log(th)
  //   //console.log(this.posts)
  //   this.plays = this.postsCol.snapshotChanges()
  //   .map(actions => {
  //   return actions.map( a => {
  //   const data = a.payload.doc.data() as Post;
  //   const id = a.payload.doc.id;
  //   //this.foundTrips = true;
  //   // this.foundNumTrips = this.foundNumTrips + 1;
  //   //console.log(this.foundTrips);
  //   //this.service2.change_found(this.foundTrips);
  //   // this.foundTrips= this.foundTrips;
  //   return { id, data };
  //   });
  //   }
  //   ).subscribe(
  //   (response: any) => {
  //   this.details = response;
  //   //console.log(this.details[0].data.title);
  //
  
  //   //console.log(this.details.length);
  //   //if (this.details.length > 0) {
  //   // this.origin = { lat: 18.5827328, lng: 73.7419264 };
  //   //console.log("Logged in");
  //   //console.log(this.details);
  //  // console.log(this.details[0].data.name);
  //   //this.storage.set('key', this.details[0].data);
  //   //this.dataarr['key']= this.storage.get('key');
  //  // console.log(this.dataarr)
  //   //this.router.navigate(['main-page'])
    
  //   //}
  //   }
  //   );
  // var multi:number[][] = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],
  // [1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],
  // [1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];
  

  //  console.log(this.playingat);
 // console.log("-----");
//   this.afs.collection('plays'
//    , ref => {
//     console.log(this.titles);
//     let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
//       query = query.where('title', '==', this.play.name);
//       //query = query.where('Pass', '==', loginData.pass);
//     return query;
//   }
//     ).snapshotChanges()
//   .map(actions => {
//     return actions.map( a => {
//       const data = a.payload.doc.data() ;
//       const id = a.payload.doc.id;
//       return { id, data };
//   });
//   }).subscribe((res) => {
//     this.temp = res;
//    //console.log(this.temp[0].id);
//     this.oldCommentsseats = this.temp[0].data.playingat[0].seats;
//     this.oldplayingat=this.temp[0].data.playingat;
//     this.area= this.oldplayingat.area;
//     this.cost= this.oldplayingat.cost;
//     this.date= this.oldplayingat.date;
//     this.theatre= this.oldplayingat.theatre;
//     this.time= this.oldplayingat.time;
//     this.seats= this.oldplayingat.seats; 
//     console.log(this.oldplayingat)

//     //console.log(this.temp[0]);
//     console.log(this.oldCommentsseats+"hii");
//     // console.log(commenta)
//     for(var ia=0;ia<10;ia++){
//     //this.oldCommentsseats.push(first[ia]); 
//     console.log(this.oldCommentsseats+"ji2");
//     }
//     if(!this.updated){ 
//     this.afs.doc("plays/"+this.temp[0].id).update({ 'playingat' :{

//       // 'artists':this.artists,
//       // 'duration':this.duration,
//       // 'titles':this.titles,
//       // 'genre':this.genre,
//       // 'language':this.language,
//       // 'rating':this.rating,
//       // 'description':this.description,
//       // 'director':this.director,
//       // 'comments':this.comments
//  }
//   });
//     //this.afs.collection('plays').add({'name': data.name,'location': data.location, 'email': data.email,'age': data.age,'password': data.password,'dob': data.dob, 'lat':this.lat,'lon':this.lon });
    
      
//    //console.log(this.lastUserId);
    
//     this.updated = true;
//     }
  //   console.log(this.temp[0].id);
  // //   if(!this.updated){
  // //     this.afs.doc("plays/"+this.temp[0].id).update({ 'comments' : {
  // //       'comment': this.commenta,
  // //       'name': this.name,
  // //       'timestamp': ts.toLocaleString()
  // // }
  // //      });
  // //     this.updated = true;    
  // //  //console.log(this.lastUserId);
  // //   }
 
  //   });
      
//  });






// <!----------------   For inserting valusesn in booking        --------------->
// var first: any = new Array(10); 
// for(var i=0;i<10;i++){
// first[i]=new Array(10); 
// } 
// for(var i=0;i<10;i++){
// for(var j=0;j<10;j++){
// first[i][j]=1; 
// } 
// }
// for(var i=0;i<10;i++){
// for(var j=0;j<10;j++){
// console.log(first[i][j]); 
// } 
// }


//=========================updating seaats back to 0 in bookings collecton============
// var sec: any = new Array(100); 
// for(var jk=0;jk<100;jk++){
//   sec[jk]=0;
//   } 
//   for( var ct=0;ct<50;ct++)
 
// this.afs.collection('bookings').add({'seats': sec,'ids':""+ct });
  

}

  addComment(commenta){
    var ts = new Date();
    // console.log(commenta);
    // console.log(this.names);
   // console.log(this.message['title']);
    this.afs.collection('plays' , ref => {
   //   console.log(this.titles)
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('title', '==', this.titles);
        //query = query.where('Pass', '==', loginData.pass);
      return query;
    }).snapshotChanges()
    .map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() ;
        const id = a.payload.doc.id;
        return { id, data };
    });
    }).subscribe((res) => {
      this.temp = res;
     //console.log(this.temp[0].id);
      this.oldComments = this.temp[0].data.comments;
      
      //console.log(this.temp[0]);
      // console.log(this.oldComments);
      // console.log(commenta)
      this.oldComments.push({ 'name': this.names, 'comment': commenta, 'timestamp':ts.toLocaleString() }); 
      // console.log(this.oldComments);
      if(!this.updated){ 
      this.afs.doc("plays/"+this.temp[0].id).update({ 'comments' :this.oldComments});

        
     //console.log(this.lastUserId);
      
      this.updated = true;
      }
      // console.log(this.temp[0].id);
    //   if(!this.updated){
    //     this.afs.doc("plays/"+this.temp[0].id).update({ 'comments' : {
    //       'comment': this.commenta,
    //       'name': this.name,
    //       'timestamp': ts.toLocaleString()
    // }
    //      });
    //     this.updated = true;    
    //  //console.log(this.lastUserId);
    //   }
   
      });
    //   var multi:number[][]=[[1,2,3],[12,3]];
    // for(var i=0;i<10;i++){
    //   for(var j=0;j<10;j++){
    //     multi[i][j]=1;
    //     console.log(i+" "+j+" "+multi[i][j])
    //   }
    // }

    // this.afs.collection('plays'
    //  , ref => {
    //   console.log(this.titles)
    //   let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
    //     query = query.where('title', '==', this.titles);
    //     //query = query.where('Pass', '==', loginData.pass);
    //   return query;
    // }
    //   ).snapshotChanges()
    // .map(actions => {
    //   return actions.map( a => {
    //     const data = a.payload.doc.data() ;
    //     const id = a.payload.doc.id;
    //     return { id, data };
    // });
    // }).subscribe((res) => {
    //   this.temp = res;
    //  //console.log(this.temp[0].id);
    //   this.oldCommentsseats = this.temp[0].data.playingat;
      
    //   //console.log(this.temp[0]);
    //   console.log(this.oldCommentsseats+"hii");
    //   // console.log(commenta)
    //   this.oldCommentsseats.push(multi); 
    //   console.log(this.oldCommentsseats+"ji2");
    //   if(!this.updated){ 
    //  // this.afs.doc("plays/"+this.temp[0].id).update({ 'playingat' :this.oldCommentsseats});

        
    //  //console.log(this.lastUserId);
      
    //   this.updated = true;
    //   }
    //   console.log(this.temp[0].id);
    // //   if(!this.updated){
    // //     this.afs.doc("plays/"+this.temp[0].id).update({ 'comments' : {
    // //       'comment': this.commenta,
    // //       'name': this.name,
    // //       'timestamp': ts.toLocaleString()
    // // }
    // //      });
    // //     this.updated = true;    
    // //  //console.log(this.lastUserId);
    // //   }
   
    //   });
    
}
  onBook(id,idate,itheatre,iarea,itime,icost){
    this.playid=id;
    // console.log(id);
    // console.log(this.play.name);
    this.storage.set('datekey', idate);
    this.storage.set('theatrekey', itheatre);
    this.storage.set('areakey', iarea);
    this.storage.set('timekey', itime);
    this.storage.set('costkey', icost);
    this.storage.set('titlekey', this.play.name);
    // this.postsCol = this.afs.collection('bookings', ref => {
    //   let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
    //   query = query.where('ids', '==', id);
    //  // query = query.where('password', '==', values.pwd);
    //   // query = query.where('time', '>=', new Date(time)).orderBy('time');
    //   // query = query.orderBy('cost', 'asc');
    //   return query;
    //   });
    //   // console.log(th)
    //   //console.log(this.posts)
    //   this.booking = this.postsCol.snapshotChanges()
    //   .map(actions => {
    //   return actions.map( a => {
    //   const data = a.payload.doc.data() as Post;
    //   const id = a.payload.doc.id;
    //   //this.foundTrips = true;
    //   // this.foundNumTrips = this.foundNumTrips + 1;
    //   //console.log(this.foundTrips);
    //   //this.service2.change_found(this.foundTrips);
    //   // this.foundTrips= this.foundTrips;
    //   return { id, data };
    //   });
    //   }
    //   ).subscribe(
    //   (response: any) => {
    //   this.details = response;
    //   console.log(this.details.length)
    //   console.log(this.details[0].data.seats);
    //     this.seatarr=this.details[0].data.seats;
    //     console.log(this.seatarr)
      
    //   }
    //   );
      
      this.router.navigateByUrl('confirm/'+ this.playid );
  }


//   onConfirm(id){
//     this.playid=id;
//     var newarr: any = new Array(10); 
//     for(var jk=0;jk<100;jk++){
//       newarr[jk]=1;
//       } 
// //this.playid
// this.afs.collection('bookings' , ref => {
//   console.log(this.titles)
//   let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
//     query = query.where('ids', '==', this.playid);
//     //query = query.where('Pass', '==', loginData.pass);
//   return query;
// }).snapshotChanges()
// .map(actions => {
//   return actions.map( a => {
//     const data = a.payload.doc.data() ;
//     const id = a.payload.doc.id;
//     return { id, data };
// });
// }).subscribe((res) => {
//   this.temp = res;
//  //console.log(this.temp[0].id);


//  //---------------Check the below line
//   //this.oldPlays = this.temp[0].data;
  
//   //console.log(this.temp[0]);
//   //console.log(this.oldComments);
//   //console.log(commenta)
//   //this.oldPlays.push({ 'ids': this.playid, 'seats': newarr }); 
//   console.log(this.oldPlays);
//   if(!this.updated){ 
//   this.afs.doc("bookings/"+this.temp[0].id).update({ 'seats' :newarr});

    
//  //console.log(this.lastUserId);
  
//   this.updated = true;
//   }
//   });
// }
}
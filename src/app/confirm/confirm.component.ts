import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { RouterModule,Router, Routes } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

interface Post{
 
}
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  playid:{
    ids:string
  }
  itheatre:any;
  iarea:any;
  itime:any;
  icost:any;
  idate:any;
  ititle:any;
  // itheatre:{
  //   itheatres:string
  // }
  // iarea:{
  //   iareas:string
  // }
  // itime:{
  //   itimes:string
  // }
  // icost:{
  //   icosts:string
  // }
  // idate:{
  //   idates:string
  // }
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'firestore';
  booking:any;
  details:any;
  temp:any;
  seatarr:any;
  playids:any;
  updated=false;
  updatedseats=false;
  newarr=[];
  check:any;
  msg:string;
  seatMatrix = {
    "rows" : [
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["_","0","0","0","0","0","0","0","0","_"]},
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["0","0","0","0","0","0","0","0","0","0"]},
      {"cols": ["_","_","0","0","0","0","0","0","_","_"]},
    ]
  }
  bntStyle: string;
  seatNo;
  selectedSeatsFlag = false;
  seatArray = [];
  dispRow = [];
  dispCol = [];
  ticketCount = 0;
  ticketCost = 350;
  totalCost;
  val=0;
  datasession:any;
  name:any;
  rowcolarr=[];
  rowAdd;
  getSeatNo(row, col){  
    var inputs = document.getElementsByTagName("a");
for (var i = 0; i < inputs.length; i++) {
  console.log(inputs[i]);
} 
    this.rowAdd = "obj"+row+col;
    console.log(this.rowAdd);
    document.getElementById(this.rowAdd).style.backgroundColor = "Green";
    this.seatNo = ((row)*10)+(col);
    if(!this.seatArray.includes(this.seatNo)){
      this.ticketCount++ ;
      this.totalCost = this.ticketCount * this.ticketCost;
      this.seatArray.push(this.seatNo);
      this.dispRow.push(10-row);
      this.dispCol.push(col+1);
      this.selectedSeatsFlag = true;
     // console.log(this.seatArray);
    }
  }
  oldplays:any;
  constructor(@Inject(LOCAL_STORAGE)private storage: WebStorageService,private route:ActivatedRoute,private afs: AngularFirestore,private router: Router) { }

  ngOnInit( ) {
    this.datasession= this.storage.get('key');
    this.name=this.datasession.name;
    this.playid={
      ids:this.route.snapshot.params['playid']
    };
    this.route.params.subscribe((params:Params)=>{
      this.playid.ids=params['playid'];
    });
    this.playids=this.playid.ids;
    // console.log(  this.playid.ids);
    // console.log(  this.playids);
    this.postsCol = this.afs.collection('bookings', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.where('ids', '==', this.playid.ids);
     // query = query.where('password', '==', values.pwd);
      // query = query.where('time', '>=', new Date(time)).orderBy('time');
      // query = query.orderBy('cost', 'asc');
      return query;
      });
      // console.log(th)
      //console.log(this.posts)
      this.booking = this.postsCol.snapshotChanges()
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
     // console.log(this.details.length)
     // console.log(this.details[0].data.seats);
        this.seatarr=this.details[0].data.seats;
     //   console.log(this.seatarr);
      
     







      //----------------------seat matrix---------------
      // for(var i of this.seatarr){
      //   console.log(i);
      // }
      
      //console.log(this.seatMatrix.rows.length)
      for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){

      //    console.log(this.seatarr[])
         //console.log(this.seatMatrix.rows[i].cols[j]+"-"+this.seatarr[(i*10)+j]);
          this.check=(i*10)+j;
          //console.log(this.check)
         if(this.check!=99&&this.check!=98&&this.check!=91&&this.check!=90&&this.check!=39&&this.check!=30){
         this.seatMatrix.rows[i].cols[j]=""+this.seatarr[(i*10)+j];
        
        // console.log(this.seatMatrix.rows[i].cols[j]+"= "+ this.seatarr[(i*10)+j])
         }
         else{
          this.seatMatrix.rows[i].cols[j]="-"
         }
        }
      }
    //  console.log(this.seatMatrix);
    }
  );
  }


  onConfirm(){
   // this.playid=id;
   alert("Your booking has been confirmed. Please check your tickets in the Booking History. Don't be late! :p ");
   this.idate=this.storage.get('datekey');
   this.itheatre=this.storage.get('theatrekey');
   this.iarea=this.storage.get('areakey');
   this.itime=this.storage.get('timekey');
   this.icost=this.storage.get('costkey');
   this.ititle=this.storage.get('titlekey');
    for(let k=0;k<100;k++){
      //this.newarr[k]=0;
      this.newarr[k]=this.seatarr[k];
    }
    for(let i of this.seatArray){
      this.newarr[i]=1;
    }
    
    //--------------------=-----for testing
    // for(var jk=0;jk<100;jk++){
    //   if(jk%2==0)
    //   newarr[jk]=1;
    //   else{
    //     newarr[jk]=0;
    //   }
    //   } 
    //   console.log(newarr);
//this.playid
this.afs.collection('bookings' , ref => {
 // console.log(this.titles)
  let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
    query = query.where('ids', '==', this.playids+"");
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


 //---------------Check the below line
  //this.oldPlays = this.temp[0].data;
  
  //console.log(this.temp[0]);
  //console.log(this.oldComments);
  //console.log(commenta)
  //this.oldPlays.push({ 'ids': this.playid, 'seats': newarr }); 
  //console.log(this.oldPlays);
  if(!this.updated){ 
  this.afs.doc("bookings/"+this.temp[0].id).update({ 'seats' :this.newarr});

    
 //console.log(this.lastUserId);
  
  this.updated = true;
  }


  });
  //  console.log(this.dispRow)
  // console.log(this.dispCol)
  // console.log(this.datasession.name)
  // console.log(this.playids)
  // for(let no=0;no<this.dispRow.length;no++){
  //   this.rowcolarr.push({'playid':this.playids,'row':this.dispRow[no],'col':this.dispCol[no]})
  // }
  for(let no=0;no<this.dispRow.length;no++){
    this.rowcolarr.push({'playid':this.playids,'row':this.dispRow[no],'col':this.dispCol[no],'Theatre':this.itheatre,'Date':this.idate,'Area':this.iarea,'Cost':this.icost,'Time':this.itime,'Title':this.ititle})
  }

  this.afs.collection('users' , ref => {
    // console.log(this.titles)
     let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
       query = query.where('name', '==', this.datasession.name);
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
   
   
    //---------------Check the below line
     //this.oldPlays = this.temp[0].data;
     this.oldplays=this.temp[0].data.seatsbooked;
     //console.log(this.temp[0]);
     //console.log(this.oldComments);
     //console.log(commenta)
    //  console.log(this.oldplays)
    //  console.log(this.rowcolarr)
     for(let ak=0;ak<this.rowcolarr.length;ak++){
         this.oldplays.push(this.rowcolarr[ak]);
     } 
    // console.log(this.oldplays);
     if(!this.updatedseats){ 
     this.afs.doc("users/"+this.temp[0].id).update({ 'seatsbooked' :this.oldplays});
   
       
    //console.log(this.lastUserId);
     
     this.updatedseats = true;
     }
   
   
     });
     this.msg="https:/smsapi.engineeringtgr.com/send/?Mobile=8369936463&Password=liferoxin90210&Message='Hi "+this.datasession.name+", Congratulations, you have booked ticket for "+this.ititle+" at "+this.itheatre+" "+this.iarea+" on " +this.idate+" "+this.itime+". '&To=9167835402&Key=sacgehmgBLJNGz5lQDsq9Ixk1p";
     window.open(this.msg);
     
   this.router.navigate(['main-page']);
}

}

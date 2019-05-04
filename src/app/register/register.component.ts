import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl,FormsModule } from '../../../node_modules/@angular/forms';
import {UserReg} from '../user-reg'
import { RouterModule,Router, Routes } from '@angular/router';
import { HeaderService } from "../header.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  lat;
  lon;
  header:boolean;
  // name: string;
  // email: string;
  // password: string;
  // location: string;
  // age: string;
  // regform;
  // type=["users","production","theatre","admin"];
  constructor(private afs: AngularFirestore, private router: Router,private headerdata: HeaderService) { }
  // onSubmit(data) {
  //   this.afs.collection('users').add({'name': data.name,'location': data.location, 'email': data.email,'age': data.age,'password': data.password,'dob': data.dob,'type': data.type});
  // }
  type=["users","production","theatre","admin"]
  userSignupModel=new UserReg(-1,"","","","","",null,"");
  submitted=false;
  onSubmit(data){
    
    //submit code here
   // this.userSignupModel.type=document.getElementById("type").innerHTML;
    //alert("Welcome"+this.userSignupModel.name+" you are a"+this.userSignupModel.type)
     this.afs.collection('users').add({'name': data.name,'location': data.location, 'email': data.email,'age': data.age,'password': data.password,'dob': data.dob, 'lat':this.lat,'lon':this.lon, 'seatsbooked':[""] });
      this.router.navigate(['']);
  }
  ngOnInit() {
    this.headerdata.currentHeader.subscribe(header => this.header = header)
    this.header=true;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat=position.coords.latitude;
        this.lon=position.coords.longitude;
      })
    }
    // console.log(this.lat);
    // console.log(this.lon);
    // this.regform=new FormGroup({
    //   name:new FormControl(""),
      
    //   location:new FormControl(""),
    //   email:new FormControl(""),
    //   age:new FormControl(""),
    //   password:new FormControl(""),
    //   cPassword:new FormControl(""),
    //   dob:new FormControl(""),
    //   type:new FormControl(""),

  }

}

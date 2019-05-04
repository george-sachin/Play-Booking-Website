import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { LogincomponentComponent } from '../logincomponent/logincomponent.component';
import { HeaderService } from "../header.service";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  datasession:any=[];
  name:String;
  header:boolean;

  constructor( @Inject(LOCAL_STORAGE)private storage: WebStorageService,private headerdata: HeaderService) { }
    
  ngOnInit() {
    this.headerdata.currentHeader.subscribe(header => this.header = header)
    this.headerdata.changeHeader(false);
    console.log(this.header)
    this.datasession['key']= this.storage.get('key');
    console.log(this.datasession);
    console.log(this.datasession['key'].name);
    this.name=this.datasession['key'].name;
    
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { environment} from '../environments/environment';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { ValidatorsDirective } from './validators.directive'
import { RouterModule,Router, Routes} from '@angular/router';
import { PlayInformationComponent } from './play-information/play-information.component';
import { AllPlaysComponent } from './all-plays/all-plays.component';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { DataService } from "./data.service";
import { HeaderService } from "./header.service";
import { IndexComponent } from './index/index.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TicketComponent } from './ticket/ticket.component';
var firebaseConfig = {
  apiKey: "", //place your apiKey here
  authDomain: "angularproject-d32fe.firebaseapp.com",
  databaseURL: "https://angularproject-d32fe.firebaseio.com",
  projectId: "angularproject-d32fe",
  storageBucket: "angularproject-d32fe.appspot.com",
  messagingSenderId: "855701742148"
};

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    LogincomponentComponent,
    RegisterComponent,
    MainComponent,
    ValidatorsDirective,
    PlayInformationComponent,
    AllPlaysComponent,
    IndexComponent,
    BookingComponent,
    ConfirmComponent,
    MovieCardsComponent,
    TicketComponent
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    StorageServiceModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IndexComponent
     },
     {
      path: 'index',
      component: IndexComponent
   },
   {
      path: 'login',
      component: LogincomponentComponent
   },
   {
      path: 'register',
      component: RegisterComponent
   },
   {
      path: 'main-page',
      component: MainComponent
   },
   {
      path: 'playinfo',
      component: PlayInformationComponent
   },
   {
    path: 'main-page',
    component: ConfirmComponent
    },
   {
    path: 'playinfo/:name',
    component: PlayInformationComponent
 } ,
 {
  path: 'allplays',
  component: AllPlaysComponent
  
},
{
 path: 'confirm/:playid',
 component: ConfirmComponent
} ,
{
 path: 'app-ticket',
 component: TicketComponent
} 
,
{
 path: 'theatre',
 component: MovieCardsComponent
} 
]),
    AngularFireDatabaseModule,  
    AngularFireModule.initializeApp(firebaseConfig),  
    // Add this
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFirestoreModule     
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DataService,HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

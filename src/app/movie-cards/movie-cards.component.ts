import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {
  yu=[[1,'thi'],[2,'abc'],[3,'jg'],[4,'kg']];
  theatre_names=[
                {name:"Bal Gandharva",address:"JM road",email:"bgandharva@gmail.com",contact:"769291010",region:"Pune"},
                {name:"E-Square",address:"shivajinagar",email:"e_square_shivajinagarb@esquare.com",contact:"890021472",region:"Pune"},
                {name:"Adya KrantiVeer Auditorium",address:"KarveNagar",email:"adyak@gmail.com",contact:"987627862",region:"Pune"},

                {name:"Xion Mall,Hinjewadi",address:"",email:"xionm@gmail.com",contact:"9956228811",region:"Pune"},
                {name:"Xion Mall Swargate",address:"",email:"xionm@gmail.com",contact:"2378019911",region:"Swargate,Pune"},
                {name:"Mangala",address:"Bhartiya Vidyapeeth ",email:"mangaala@gmail.com",contact:"765920137",region:"Shivajinagar,Pune"},
                {name:"Circuit House",address:"Vimannagar",email:"chouse@gmail.com",contact:"742542505",region:"Pune"},
                {name:"Yashwantrao Chauhan Natyagruh",address:"Sadashiv Peth",email:"yrchauhan@gmail.com",region:"Pune"},
                {name:"Vishnudas Bhave Theatre",address:"Karve Nagar",email:"vbhave@gmail.com",contact:"823927982",region:"Pune"}];
  
  constructor() { }

  ngOnInit() {
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

@Output()  childEvent = new EventEmitter()
 strdata:string='chlld Data';
 
@Output() child2Event1= new EventEmitter();
   JsonObj={
     id:1,
     name:'ishita',
     post:'Developer',
     status:true
   }

@Output() child2Event2=new EventEmitter();
ArrayofJsonObj=[{
  id:1,
  name:'ishita',
  post:'Developer',
  status:true
},
{
  id:2,
  name:'shital',
  post:'QA',
  status:false
},

{
  id:3,
  name:'Geeta',
  post:'DBA',
  status:true
},

{
  id:4,
  name:'Rani',
  post:'BA',
  status:false
}
];

 @Output() child2Event3= new EventEmitter();
 Array=["abc","def","ghi","jkl","xyz"];
  constructor() { }

  ngOnInit() {
  }

  onClick(){
   this.childEvent.emit(this.strdata);
  
  }
  onClick1(){
    this.child2Event1.emit(this.JsonObj)
  }

  onClick2(){
    this.child2Event2.emit(this.ArrayofJsonObj);
  }

  onClick3(){
    this.child2Event3.emit(this.Array);

  }
}

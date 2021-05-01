import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

 rating:number=2;

  strData:String=' Data From Parent......! ';

  Demo: string= "Data from parent to child";

FromChild2Data:string="";
FromChildJsonData:string='';
FromChild2ArrayOfJson:{};
ArrayFromChild2:[];

  JsonObj={
    id:10,
    name:'ishita Ghule',
    Mob_No:"9923704391",
    post:'Developer'
  }

  
  ArrayofJsonObj=[{
    id:10,
    name:'ishita Ghule',
    Mob_No:"9923704391",
    post:'Developer'
  },
    
    {
    id:11,
    name:'shital Ghule',
    Mob_No:"7743895714",
    post:'Developer'
  },


  {
    id:12,
    name:'Geeta Ghule',
    Mob_No:"9075889617",
    post:'Sales'
  }
];


  constructor() { }

  ngOnInit() {
  }

}

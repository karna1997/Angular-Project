import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string="blue";
  rating:number=2;

  jsonobj={

    color:"blue",
    fontFamily:"Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
    "font-style": "italic"
  }
  constructor() { }

  ngOnInit() {
  }

}

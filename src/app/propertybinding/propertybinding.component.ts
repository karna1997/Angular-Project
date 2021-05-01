import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string="Ishita Ghule";
  num1:number=4;
  flag:boolean=true;
  imgUrl:string="../../assets/nature.jpg";

  ishidden:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}

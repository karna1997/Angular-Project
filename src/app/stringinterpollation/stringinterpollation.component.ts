import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpollation',
  templateUrl: './stringinterpollation.component.html',
  styleUrls: ['./stringinterpollation.component.css']
})
export class StringinterpollationComponent implements OnInit {
 
  name:string='Ishita Ghule';
  num1:number=20;
  flag:boolean=true;

  imgUrl:string='../../assets/nature.jpg'

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string='special';
  rating:number=3;

  isError:boolean=true;
  isSpecial:boolean=true;

  jsonobj={
    'success':'this.isError',
    'warning':!this.isError,
    'special':this.isSpecial
  }
  constructor() {}

  ngOnInit() {
  }

}

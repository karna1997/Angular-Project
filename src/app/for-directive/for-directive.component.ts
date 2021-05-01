import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  selected:string='';
  course=['Agular 8','React Js','Vue Js','Ebber Js','Jsp'];
  product=[
    {
      name:'Samsung',
      price:15000,
      id:1

    },
    {
      name:'motorola',
      price:25000,
      id:2
    },
    {
      name:'one plus',
      price:35000,
      id:3
    },
    {
      name:'Realme',
      price:12000,
      id:4

    }
  ];

  onMouseOver(item){
    console.log("mouse over Event Occured..!!")
    this.selected=item.name;

  

  }
  onmouseout(){
     this.selected='';

  }
  



  constructor() { }

  ngOnInit() {
  }

}

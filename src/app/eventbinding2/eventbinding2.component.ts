import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  res_mult:number=0;
  name:string='';
  constructor() { }

  ngOnInit() {
  }

onChange(input1){
  console.log("Change Event Occured..!!!!")
  input1.style.background="green";
}

onKeyup(){
  console.log("key  up event occured...!!!")

}
onKeyDown(){
  console.log("Key Down Event Occured..!!!")
}

}

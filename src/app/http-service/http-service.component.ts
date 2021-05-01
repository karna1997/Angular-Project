import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {
  posts:any[]=[];
  id:string='';
  title:string='';
  body:string='';
  ishidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response);
     return(this.posts=(<any> response))

    })

}

onpost(mytitle,mybody){
  let jsonObj={
    title:mytitle,
    body:mybody

  }

  this.service.postData(jsonObj)
  .subscribe((response)=>{
    console.log(response);
  })
}

onUpdate(item){
  this.id=item.id;
  this.title=item.title;
  this.body=item.body;
  this.ishidden=false;
}

onFinalUpdate(){
  let updateobj={
    id:this.id,
    title:this.title,
    body:this.body
  }

  this.service.UpdateData(updateobj)
  .subscribe((response)=>{
      console.log(response)
  })

}

}
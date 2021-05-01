import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

  
// http service is a root service for that we used decorator @injectable 7 when we use this decorator then we dont have to  declare in provider section.
// observable takes a request through the internet after that observeable checks
// whether server is available or not (observable is a asunchronoud blocking call) and if not available then it insert the delay of microsec and monitor upto that time 
// once delay gets over and still server is not available then observable gives the error/response that server is not available 
//  and if server is available then it gives response including data for what the request was processed..
//   @angular/http where .d file is present.  

@Injectable({
 providedIn: 'root'  
})
export class HttpService {
 url:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }


  getpost(){
    return (this.http.get(this.url));
   }

   postData(obj){
    return(this.http.post(this.url,obj))

   }

   
  UpdateData(obj){
    return  (this.http.put(`${this.url}/${obj.id}`,obj));
  }

}


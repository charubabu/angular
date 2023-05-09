import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  httpOptions:any;

  constructor(private http:HttpClient) {

    this.httpOptions = {



      headers: new HttpHeaders({

     

      'Content-Type': 'application/json',

     

      'Authorization': "Bearer "+sessionStorage.getItem("token")

     

      })

     

      }

  }

  getForum():Observable<any>{

    return this.http.get("http://localhost:4500/660/forum",this.httpOptions)

  }

  postForum(obj:any):Observable<any>{

    return this.http.post("http://localhost:4500/660/forum/",obj,this.httpOptions)

  }

}
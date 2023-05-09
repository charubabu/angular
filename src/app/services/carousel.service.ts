import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http:HttpClient) { }

  getCat(): Observable<any>{
    return this.http.get("http://localhost:4500/carousel")
  }

  getdetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/carousel/"+id)
  }
}

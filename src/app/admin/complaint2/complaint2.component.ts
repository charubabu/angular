import { Component } from '@angular/core';
import { ComplaintsService } from 'src/app/services/complaints.service';

@Component({
  selector: 'app-complaint2',
  templateUrl: './complaint2.component.html',
  styleUrls: ['./complaint2.component.css']
})
export class Complaint2Component {
  names:any;
  constructor(is:ComplaintsService){
    is.getcomplaint().subscribe(
      {
        next:(data:any)=>this.names=data,
        error:()=>this.names=[]
      }
    )
  }

}

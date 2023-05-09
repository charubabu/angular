import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooditemsService } from 'src/app/services/fooditems.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  id:any;
  details:any;
constructor(private fs : FooditemsService,private ar:ActivatedRoute){
  this.ar.params.subscribe(
    {
      next : (params) => {
        this.id = params['id']
        this.readdata()
      },
      error : () => this.id = 0
    }
  )

}
readdata(){
  this.fs.getdetails(this.id).subscribe(
    {
      next: (data:any) => this.details = data,
      error : ()=>this.details = {}
    }
  )
}
}

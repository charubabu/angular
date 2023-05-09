import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  state?:any;
  id:any;
  details:any;
constructor(private cs : CarouselService,private ar:ActivatedRoute, private router:Router){

 this.state=this.router.getCurrentNavigation()?.extras.state;
}


}

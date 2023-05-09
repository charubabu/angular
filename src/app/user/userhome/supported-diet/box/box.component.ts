import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() pd:any;
//  constructor(private  cs: CarouselService,private route:ActivatedRoute,private router : Router){}
//  changeRoute(){
//   this.router.navigate(['details'],{relativeTo:this.route,state:this.pd});
//  }
}

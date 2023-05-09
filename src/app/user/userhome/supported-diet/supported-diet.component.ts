import { Component } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-supported-diet',
  templateUrl: './supported-diet.component.html',
  styleUrls: ['./supported-diet.component.css']
})
export class SupportedDietComponent {
  cdata:any;
  constructor(private cs:CarouselService){
    this.cdata = cs.getCat().subscribe({
      next: (data:any) => this.cdata = data,
      error:()=>this.cdata = []
    })
  }

}

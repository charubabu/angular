import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent {
  @Input() pd: any;


}

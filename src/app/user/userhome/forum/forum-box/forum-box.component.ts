import { Component, Input } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-box',
  templateUrl: './forum-box.component.html',
  styleUrls: ['./forum-box.component.css']
})
export class ForumBoxComponent {
  
  @Input() pd:any;
}

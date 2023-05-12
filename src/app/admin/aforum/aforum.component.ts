import { Component } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-aforum',
  templateUrl: './aforum.component.html',
  styleUrls: ['./aforum.component.css']
})
export class AforumComponent {
  forums:any;
  com:any;
  
  constructor(private fs:ForumService){
      fs.getForum().subscribe({
        next:(data:any)=>this.forums = data,
        error:()=>this.forums=[]
      })
  }
  ngOnInit(){
    this.fs.getForum().subscribe({
      next:(data:any)=>this.forums = data,
      error:()=>this.forums=[]
    })
  }

  onPost(){
    let obj ={
      "usernmae":sessionStorage.getItem("username"),
      "comment":this.com
    }
    this.fs.postForum(obj).subscribe({
      next:()=>{this.ngOnInit()
      this.com=""
    },
      error:()=>alert("Error on posting")
    })
    // window.location.reload()

  }

}

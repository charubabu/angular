import { Component, Input } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-aforum-box',
  templateUrl: './aforum-box.component.html',
  styleUrls: ['./aforum-box.component.css']
})
export class AforumBoxComponent {
  @Input() pd:any;
  // reply() {
  //   // Add your reply logic here
  //   console.log('Reply button clicked');
  isReply=false;
  replyText = '';
  constructor(private us:ForumService){

  }
  reply() {
    if(this.isReply == false){
      this.isReply = true;
    }
    else{
      this.isReply = false;
    }
    console.log('Reply button clicked');
  }
  submitReply() {
    let un = sessionStorage.getItem("username");
    // this.us.getUsers().subscribe({
    //   next:(data:any)=>{
    //     for(let x of data){
    //       if(x.username == un){

    //       }
    //     }
    //   },
    //   error:()=>{}
    // })
    let rl = this.pd.reply;
    let obj = {
      "usernmae":un,
      "comment": this.replyText
    }
    rl.push(obj)
    this.us.updateForum({"reply":rl},this.pd.id).subscribe({
      next:()=>{alert("reply successful")},
      error:()=>{alert("reply failed")}
    })
    this.replyText = ""
    this.isReply = false;
  }

}

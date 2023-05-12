import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shareheader',
  templateUrl: './shareheader.component.html',
  styleUrls: ['./shareheader.component.css']
})
export class ShareheaderComponent {
  log: any;

  constructor(private router:Router,private route:ActivatedRoute,
    public userService: UserService,){}
  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
    else{
      this.router.navigate(["home/"+url],{relativeTo:this.route})
    }
  }
  
  
  logout(){
    this.router.navigateByUrl('/login')
  }
}

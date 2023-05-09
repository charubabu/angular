import { Component, OnInit } from '@angular/core';
import { LogService } from './services/log.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'task';
  currentUrl: string = "";
  constructor(private log:LogService,private router:Router){

         
    console.log(this.router.url);
     
  }

ngOnInit(): void {
  this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
  .subscribe(event => {            
    this.currentUrl = event.url;
     console.log('this is what your looking for ', event.url);       
  });
}

  ngAfterViewInit(){

    if(!this.log.getStatus()){

               

      this.router.navigate(['login'])

   }

   else{

     if(this.log.usertype=="admin")

       this.router.navigate(['admin/home']);

     else

       this.router.navigate(['user/home']);

   }

  }






}

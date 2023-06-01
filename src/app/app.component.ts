import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LABtv';


  navbg: any;

  @HostListener('document: scroll') scrollover(){
    
    console.log(document.body.scrollTop)
    
  
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) 
   {this.navbg}

  }
}
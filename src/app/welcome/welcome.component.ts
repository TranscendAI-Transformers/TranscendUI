import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  modules:any[]=[];
  constructor(private service:AppService){
    this.modules=service.modules;
  }

 
}

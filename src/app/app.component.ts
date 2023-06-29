import { Component,OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  modules:any[]=[];
  imageServices:any[]=[];
  textServices:any[]=[];
  videoServices:any[]=[];
  constructor(private service:AppService){
    this.modules=service.modules;
  }

  ngOnInit(): void {
        this.imageServices=this.modules.filter(x=>x.category=="Image");
        this.textServices=this.modules.filter(x=>x.category=="Text");
        this.videoServices=this.modules.filter(x=>x.category=="Video");
   
  }
}

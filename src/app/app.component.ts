import { Component,OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  modules:any[]=[];
  images:any[]=[];
  text:any[]=[];
  video:any[]=[];
  constructor(private service:AppService){
    this.modules=service.modules;
    console.log(this.modules);
  }

  ngOnInit(): void {
        this.images=this.modules.filter(x=>x.category=="Image");
        this.text=this.modules.filter(x=>x.category=="Text");
        this.video=this.modules.filter(x=>x.category=="Video");
  }
}

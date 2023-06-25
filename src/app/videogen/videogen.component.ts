import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-videogen',
  templateUrl: './videogen.component.html',
  styleUrls: ['./videogen.component.css']
})
export class VideogenComponent {
  loading:boolean=false;
  empty=true;
  response=''
  prevText:String='';
  constructor(private service:AppService){

  }
  generateVideo(text:String){
    this.loading=true;
    this.service.generateVideo({'text':text}).subscribe(
      res=>{
        this.prevText=text;
        this.empty=false;
        this.loading=false;
        this.response=res;
        console.log(res)
      }
    )
  }
}

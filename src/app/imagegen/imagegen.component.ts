import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-imagegen',
  templateUrl: './imagegen.component.html',
  styleUrls: ['./imagegen.component.css']
})
export class ImagegenComponent {
  loading:boolean=false;
  empty=true;
  response=''
  prevValue:String=''
  constructor(private service:AppService){

  }
  generateImage(text:String){
    this.prevValue=text
    this.loading=true;
    this.service.generateImage({'text':text}).subscribe(
      res=>{
        this.empty=false;
        this.loading=false;
        this.response=res;
      }
    )
  }
}

import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-aiupscaler',
  templateUrl: './aiupscaler.component.html',
  styleUrls: ['./aiupscaler.component.css']
})
export class AiupscalerComponent {
  loading:boolean=false;
  empty=true;
  response=''
  prevUrl:String=''
  prevText:String=''
  constructor(private service:AppService){

  }
  upscaleImage(text:String,url:String){
    this.loading=true;
    this.prevText=text;
    this.prevUrl=url
    this.service.upscaleImage({'text':text,'url':url}).subscribe(
      res=>{
        this.empty=false;
        this.loading=false;
        this.response=res;
      }
    )
  }
}

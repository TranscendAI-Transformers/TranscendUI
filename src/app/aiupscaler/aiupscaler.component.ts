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
  response:String|null=null;
  prevUrl:String=''
  error:String|null=null
  constructor(private service:AppService){

  }
  upscaleImage(url:String){
    this.loading=true;
    this.prevUrl=url
    this.response=null;
    this.error=null
    this.service.upscaleImage({'url':url}).subscribe(
      res=>{
        this.empty=false;
        this.loading=false;
        this.response=res;
      },err=>{
        this.loading=false
        this.error=err.error
      }
    )
  }
}

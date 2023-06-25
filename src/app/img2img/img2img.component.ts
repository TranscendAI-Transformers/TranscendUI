import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-img2img',
  templateUrl: './img2img.component.html',
  styleUrls: ['./img2img.component.css']
})
export class Img2imgComponent {
  loading:boolean=false;
  empty=true;
  response:String|null=null;
  prevUrl:String=''
  prevText:String=''
  error:String|null=null
  constructor(private service:AppService){

  }
  generateImage(text:String,url:String){
    this.loading=true;
    this.prevText=text;
    this.prevUrl=url
    this.response=null;
    this.error=null
    this.service.img2img({'text':text,'url':url}).subscribe(
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

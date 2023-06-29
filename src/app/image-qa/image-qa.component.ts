import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-image-qa',
  templateUrl: './image-qa.component.html',
  styleUrls: ['./image-qa.component.css']
})
export class ImageQAComponent {
  loading:boolean=false;
  empty=true;
  response:String|null=null;
  prevUrl:String=''
  prevText:String=''
  error:String|null=null
  constructor(private service:AppService){

  }
  imageQA(text:String,url:String){
    this.loading=true;
    this.prevText=text;
    this.prevUrl=url
    this.response=null;
    this.error=null
    this.service.imageQA({'text':text,'url':url}).subscribe(
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

import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-imagecaption',
  templateUrl: './imagecaption.component.html',
  styleUrls: ['./imagecaption.component.css']
})
export class ImagecaptionComponent {
  loading:boolean=false;
  empty=true;
  response:any|null=null;
  prevUrl:String=''
  error:String|null=null
  constructor(private service:AppService){

  }
  imageCaption(url:String){
    this.loading=true;
    this.prevUrl=url
    this.response=null;
    this.error=null;
    this.empty=true;
    this.service.imageCaption({'url':url}).subscribe(
      res=>{
        this.empty=false;
        this.loading=false;
        this.response=res;
        console.log(this.response)
      },err=>{
        this.loading=false
        this.error=err.error
      }
    )
  }
}

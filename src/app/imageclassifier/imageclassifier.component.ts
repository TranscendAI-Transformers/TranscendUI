import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-imageclassifier',
  templateUrl: './imageclassifier.component.html',
  styleUrls: ['./imageclassifier.component.css']
})
export class ImageclassifierComponent {
  loading:boolean=false;
  empty=true;
  response:String|null=null;
  prevUrl:String=''
  error:String|null=null
  constructor(private service:AppService){

  }
  classifyImage(url:String){
    this.loading=true;
    this.prevUrl=url
    this.response=null;
    this.error=null;
    this.empty=true;
    this.service.classifyImage({'url':url}).subscribe(
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

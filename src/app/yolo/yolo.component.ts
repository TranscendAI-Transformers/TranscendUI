import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-yolo',
  templateUrl: './yolo.component.html',
  styleUrls: ['./yolo.component.css']
})
export class YoloComponent {
  loading:boolean=false;
  empty=true;
  response:any|null=null;
  prevUrl:String=''
  error:String|null=null
  constructor(private service:AppService){

  }
  yolo(url:String){
    this.loading=true;
    this.prevUrl=url
    this.response=null;
    this.error=null;
    this.empty=true;
    this.service.yolo({'url':url}).subscribe(
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

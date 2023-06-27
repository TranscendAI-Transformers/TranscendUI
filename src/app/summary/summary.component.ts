import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  loading:boolean=false;
  empty=true;
  response:any=[]
  prevText:String=''
  constructor(private service:AppService){

  }
  summary(text:String){
    this.loading=true;
    this.prevText=text
    this.service.summary({'text':text}).subscribe(
      res=>{
        this.empty=false;
        this.loading=false;
        this.response=res;
      }
    )
  }
}

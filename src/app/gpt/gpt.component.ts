import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent {
  loading:boolean=false;
  empty=true;
  response:any={}
  prevText:String=''
  constructor(private service:AppService){

  }
  gpt(text:String){
    this.loading=true;
    this.prevText=text
    this.service.gpt({'text':text}).subscribe(
      res=>{
        this.empty=false;
        this.loading=false;
        this.response=res;
      }
    )
  }

}

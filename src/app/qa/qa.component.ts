import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QAComponent {
  loading:boolean=false;
  empty=true;
  response:any={}
  prevQuestion:String=''
  prevContext:String=''
  constructor(private service:AppService){

  }
  askBot(question:String,context:String){
    this.loading=true;
    this.prevQuestion=question;
    this.prevContext=context
    this.service.askBot({'question':question,'context':context}).subscribe(
      res=>{
        this.empty=false;
        this.loading=false;
        this.response=res;
      }
    )
  }
}

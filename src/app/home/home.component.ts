import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  empty=true
  title = 'TranscendUI';
  response:any={}
  loading:boolean=false;
  error:String|null=null
  constructor(private service:AppService){

  }


  imageLessPipeLine(url:String){
    this.response={}
    this.loading=true;
    this.error=null;
    this.service.runPipeline({'url':url}).subscribe(res=>{
      this.loading=false;
      this.response=res;
      this.empty=false
    },(err)=>{
      console.log(err.error)
      this.error=err.error;
      this.loading=false;
    })
  }


}

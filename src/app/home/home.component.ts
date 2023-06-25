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
  showTranscription=false;
  showImages=false;
  loading:boolean=false;
  constructor(private service:AppService){

  }


  imageLessPipeLine(url:String){
    this.response={}
    this.loading=true;
    this.service.runPipeline({'url':url}).subscribe(res=>{
      this.loading=false;
      this.response=res;
      console.log(res)
      this.empty=false
    })
  }
  toggleTranscription(){
    this.showTranscription=!this.showTranscription;
  }
  toggleImages(){
    this.showImages=!this.showImages;
  }
}

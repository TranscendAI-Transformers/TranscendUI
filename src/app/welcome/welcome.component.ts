import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  modules=[{'text':'Transcribe & Summarize','path':'transcribe'},
  {'text':'QA Bot',path:'qa'},{'text':'GPT Completion',path:'gpt'},{'text':'Image Generation',path:'imagegen'},{'text':'Image to Image Generation',path:'img2img'},
  {'text':'AI Upscaler',path:'aiupscaler'},{'text':'Image Classifier',path:'classify'},{'text':'YOLO Classifier',path:'yolo'},
  {'text':'Video Generation',path:'videogen'}];
}

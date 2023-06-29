import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  modules=[
  {'text':'Transcribe & Summarize','path':'transcribe','description':'Paste youtube url to get transcript & summary.'},
  {'text':'QA Bot',path:'qa','description':'Given proper context, it can answer questions from the context.'},
  {'text':'GPT Completion',path:'gpt','description':'given a text, gpt can predict next few sentences'},
  {'text':'Image Generation',path:'imagegen','description':'given a description, image gen can generate an image'},
  {'text':'Image to Image Generation',path:'img2img','description':'given a description and an image, image2image can generate a new image'},
  {'text':'AI Upscaler',path:'aiupscaler','description':'given a image, image gen can upscale the image'},
  {'text':'Image Classifier',path:'classify','description':'given a image, will classify the largest object in the image'},
  {'text':'YOLO Classifier',path:'yolo','description':'given a image, yolo can identify all object, animal, people in the image'},
  {'text':'Video Generation',path:'videogen','description':'given a description, video gen can generate an video'},
  {'path':'summary','text':'Summary','description':'Generate summary from any given context'},
  {'path':'image_caption','text':'Image Caption','description':'Generate Caption/description from image'},
  {'path':'image_qa','text':'Image QA','description':'Generate Answers from context available within the image.'},
];
}

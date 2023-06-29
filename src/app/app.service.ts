import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  base:string='http://localhost:5000/';
  modules=[
    {'text':'Transcribe & Summarize','path':'transcribe','description':'Paste youtube url to get transcript & summary.','category':'Text'},
    {'text':'QA Bot',path:'qa','description':'Given proper context, it can answer questions from the context.','category':'Text'},
    {'text':'GPT Completion',path:'gpt','description':'given a text, gpt can predict next few sentences','category':'Text'},
    {'text':'Image Generation',path:'imagegen','description':'given a description, image gen can generate an image','category':'Image'},
    {'text':'Image to Image Generation',path:'img2img','description':'given a description and an image, image2image can generate a new image','category':'Image'},
    {'text':'AI Upscaler',path:'aiupscaler','description':'given a image, image gen can upscale the image','category':'Image'},
    {'text':'Image Classifier',path:'classify','description':'given a image, will classify the largest object in the image','category':'Image'},
    {'text':'YOLO Classifier',path:'yolo','description':'given a image, yolo can identify all object, animal, people in the image','category':'Image'},
    {'text':'Video Generation',path:'videogen','description':'given a description, video gen can generate an video','category':'Video'},
    {'path':'summary','text':'Summary','description':'Generate summary from any given context','category':'Text'},
    {'path':'image_caption','text':'Image Caption','description':'Generate Caption/description from image','category':'Image'},
    {'path':'image_qa','text':'Image QA','description':'Generate Answers from context available within the image.','category':'Image'},
  ];
  
  constructor(private http:HttpClient) { }

  runPipeline(data:any){
    return this.http.post(this.base,data)
  }
  generateImage(data:any){
    return this.http.post(this.base+'imagegen',data,{responseType:'text'})
  }
  img2img(data:any){
    return this.http.post(this.base+'img2img',data,{responseType:'text'})
  }
  imageQA(data:any){
    return this.http.post(this.base+'image_qa',data,{responseType:'text'})
  }
  upscaleImage(data:any){
    return this.http.post(this.base+'aiupscaler',data,{responseType:'text'})
  }
  classifyImage(data:any){
    return this.http.post(this.base+'classify',data,{responseType:'text'})
  }
  imageCaption(data:any){
    return this.http.post(this.base+'image_caption',data)
  }
  yolo(data:any){
    return this.http.post(this.base+'yolo',data)
  }
  askBot(data:any){
    return this.http.post(this.base+'ask_bot',data)
  }
  gpt(data:any){
    return this.http.post(this.base+'text_generation',data)
  }
  summary(data:any){
    return this.http.post(this.base+'summary',data)
  }
  generateVideo(data:any){
    return this.http.post(this.base+'videogen',data,{responseType:'text'})
  }
}

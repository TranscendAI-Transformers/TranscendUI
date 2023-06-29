import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  base:string='http://localhost:5000/';
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

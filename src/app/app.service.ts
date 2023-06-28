import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  runPipeline(data:any){
    return this.http.post('http://localhost:5000/',data)
  }
  generateImage(data:any){
    return this.http.post('http://localhost:5000/imagegen',data,{responseType:'text'})
  }
  img2img(data:any){
    return this.http.post('http://localhost:5000/img2img',data,{responseType:'text'})
  }
  upscaleImage(data:any){
    return this.http.post('http://localhost:5000/aiupscaler',data,{responseType:'text'})
  }
  classifyImage(data:any){
    return this.http.post('http://localhost:5000/classify',data,{responseType:'text'})
  }
  imageCaption(data:any){
    return this.http.post('http://localhost:5000/image_caption',data)
  }
  yolo(data:any){
    return this.http.post('http://localhost:5000/yolo',data)
  }
  askBot(data:any){
    return this.http.post('http://localhost:5000/ask_bot',data)
  }
  gpt(data:any){
    return this.http.post('http://localhost:5000/text_generation',data)
  }
  summary(data:any){
    return this.http.post('http://localhost:5000/summary',data)
  }
  generateVideo(data:any){
    return this.http.post('http://localhost:5000/videogen',data,{responseType:'text'})
  }
}

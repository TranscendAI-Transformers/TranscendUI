import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagegenComponent } from './imagegen/imagegen.component';
import { VideogenComponent } from './videogen/videogen.component';
import { Img2imgComponent } from './img2img/img2img.component';
import { QAComponent } from './qa/qa.component';
import { AiupscalerComponent } from './aiupscaler/aiupscaler.component';
import { ImageclassifierComponent } from './imageclassifier/imageclassifier.component';
import { YoloComponent } from './yolo/yolo.component';
import { GptComponent } from './gpt/gpt.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SummaryComponent } from './summary/summary.component';
import { ImagecaptionComponent } from './imagecaption/imagecaption.component';
import { ImageQAComponent } from './image-qa/image-qa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagegenComponent,
    VideogenComponent,
    Img2imgComponent,
    QAComponent,
    AiupscalerComponent,
    ImageclassifierComponent,
    YoloComponent,
    GptComponent,
    WelcomeComponent,
    SummaryComponent,
    ImagecaptionComponent,
    ImageQAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

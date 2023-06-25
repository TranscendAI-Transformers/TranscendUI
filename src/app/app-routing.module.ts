import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagegenComponent } from './imagegen/imagegen.component';
import { VideogenComponent } from './videogen/videogen.component';
import { Img2imgComponent } from './img2img/img2img.component';
import { QAComponent } from './qa/qa.component';
import { AiupscalerComponent } from './aiupscaler/aiupscaler.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'imagegen',component:ImagegenComponent,pathMatch:'full'},
  {path:'img2img',component:Img2imgComponent,pathMatch:'full'},
  {path:'aiupscaler',component:AiupscalerComponent,pathMatch:'full'},
  {path:'qa',component:QAComponent,pathMatch:'full'},
  {path:'videogen',component:VideogenComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
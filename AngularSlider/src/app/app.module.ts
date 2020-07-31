import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {SwipeCardLibModule} from 'ng-swipe-card';


import { SliderItemDirective } from './slider/slider-item.directive';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SliderItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    SwipeCardLibModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

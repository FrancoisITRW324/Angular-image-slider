import { Component, AfterContentInit, ContentChildren, ViewChild, QueryList, ElementRef, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  // tslint:disable-next-line: typedef
  ngOnInit(){
    //sets slider
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems);
  }


}

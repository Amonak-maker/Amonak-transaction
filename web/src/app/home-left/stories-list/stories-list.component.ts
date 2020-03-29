import { Component, OnInit,Input, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.scss']
})
export class StoriesListComponent implements OnInit {
  @Output() isOpenmodel:boolean=false
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoWidth:true,
    margin:0,

    navText: ['', ''],
  
    nav: false
  }
  images=["./../../../assets/imgs/beauty.png","./../../../assets/imgs/animal.png","./../../../assets/imgs/car.png"]
  stories=[1,2,3,4,5,6]
  constructor() { }

  ngOnInit() {
  }
  openModel(){
    this.isOpenmodel=!this.isOpenmodel
    
    console.log(this.isOpenmodel)
  }
}

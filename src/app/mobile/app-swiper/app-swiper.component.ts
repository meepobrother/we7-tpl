import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './app-swiper.component.html',
  styleUrls: ['./app-swiper.component.scss']
})
export class AppSwiperComponent implements OnInit {
  _height: number = 200;
  @Input()
  set height(val: number) {
    this._height = val;
  }
  get height() {
    return this._height;
  }
  images: any[] = [
    { url: './assets/images/swiper-1.png', title: '标题1' },
    { url: './assets/images/swiper-2.png', title: '标题2' },
    { url: './assets/images/swiper-3.png', title: '标题3' }
  ];
  constructor() { }

  ngOnInit() {
  }

}

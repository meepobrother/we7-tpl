import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sticky,[appSticky],[sticky]',
  templateUrl: './app-sticky.component.html',
  styleUrls: ['./app-sticky.component.scss']
})
export class AppStickyComponent implements OnInit {
  @HostBinding('style.top.px') _top: number = 0;
  @Input()
  set top(val: number) {
    this._top = val;
  }
  @Input()
  set sticky(val: number) {
    this._top = val;
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Directive, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'app-sticky,[appSticky],[sticky]'
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

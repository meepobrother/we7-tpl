import { Component, OnInit, Inject, HostBinding, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent implements OnInit {
  @HostBinding('style.width.px') width: number;
  @HostBinding('style.height.px') height: number;
  @HostBinding('style.display') display: string = 'block';
  _offset: number = 0;
  @Input()
  set offset(val: number) {
    this._offset = val;
  }
  get offset() {
    return this._offset;
  }
  constructor(
    @Inject(DOCUMENT) public doc: HTMLDocument
  ) { }

  ngOnInit() {
    this.height = this.doc.documentElement.clientHeight - this._offset;
    this.width = this.doc.documentElement.clientWidth;
  }

}

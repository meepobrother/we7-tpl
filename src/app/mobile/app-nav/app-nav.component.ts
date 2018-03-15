import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  @HostBinding('style.height.px') _height: number = 44;
  @Input()
  set height(val: number) {
    this._height = val;
  };
  get height() {
    return this._height;
  }

  @Input() props: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  onItem(item: any) {
    this.props.map(res => {
      res.active = false;
    })
    item.active = !item.active;
  }

}

import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  @HostBinding('style.height.px') _height: number = 44;
  @Input()
  set height(val: number) {
    this._height = val;
  }
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
    });
    item.active = !item.active;
  }

}

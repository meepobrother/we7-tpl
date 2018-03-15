import { Component, OnInit } from '@angular/core';
import { RatingComponent, RatingConfig } from 'ngx-weui/rating';
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  footers: any[] = [{
    title: '首页',
    link: '/app/entry/site/we7_tpl/index'
  }, {
    title: '发布',
    link: '/app/entry/site/we7_tpl/post'
  }, {
    title: '订单',
    link: '/app/entry/site/we7_tpl/order'
  }, {
    title: '我的',
    link: '/app/entry/site/we7_tpl/home'
  }];

  config: RatingConfig = {
    max: 10
  };

  customIconsCog: RatingConfig = {
    states: [
        { off: 'weui-icon-circle', on: 'weui-icon-download' },
        { off: 'weui-icon-circle', on: 'weui-icon-info' },
        { off: 'weui-icon-circle', on: 'weui-icon-warn' },
        { off: 'weui-icon-circle', on: 'weui-icon-waiting' },
        { off: 'weui-icon-circle', on: 'weui-icon-search' }
    ]
};
customIconsAndClassCog: RatingConfig = {
    cls: 'rating',
    stateOff: 'off',
    stateOn: 'on'
};
  constructor() { }

  ngOnInit() {
  }

}

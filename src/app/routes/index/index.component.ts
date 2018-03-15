import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  tabs: any[] = [{
    title: '测试1',
    link: '/app/entry/site/we7_tpl/test1'
  }];

  navs: any[] = [{
    title: 'tab1',
    link: '/app/entry/site/we7_tpl/index'
  }, {
    title: 'tab2',
    link: '/app/entry/site/we7_tpl/index',
    params: {
      tab: 'tab2'
    }
  }, {
    title: 'tab3',
    link: '/app/entry/site/we7_tpl/index',
    params: {
      tab: 'tab3'
    }
  }];

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

  constructor() { }

  ngOnInit() {
  }

}

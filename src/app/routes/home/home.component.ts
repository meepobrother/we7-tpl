import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

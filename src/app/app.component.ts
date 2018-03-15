import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tabs: any[] = [{
    title: '测试1',
    link: '/app/entry/site/we7_tpl/test1'
  }];
}

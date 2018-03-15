import { Component, OnInit, Input } from '@angular/core';

export interface AppTabsProp {
  title: string;
  link: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './app-tabs.component.html',
  styleUrls: ['./app-tabs.component.scss']
})
export class AppTabsComponent implements OnInit {
  @Input() props: AppTabsProp[] = [];
  constructor() { }

  ngOnInit() { }

}

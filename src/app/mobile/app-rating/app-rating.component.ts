import { Component, OnInit, Input } from '@angular/core';
import { RatingComponent, RatingConfig } from 'ngx-weui/rating';
@Component({
  selector: 'app-rating',
  templateUrl: './app-rating.component.html',
  styleUrls: ['./app-rating.component.scss']
})
export class AppRatingComponent implements OnInit {
  config: RatingConfig = {
    max: 6,
  };
  @Input() props: any = {
    label: '评星'
  };
  constructor() { }

  ngOnInit() {
  }

}

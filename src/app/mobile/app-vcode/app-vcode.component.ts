import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-vcode',
  templateUrl: './app-vcode.component.html',
  styleUrls: ['./app-vcode.component.scss']
})
export class AppVcodeComponent implements OnInit {
  @Input() seconds: number = 30;

  constructor() { }

  ngOnInit() {
  }

  onSendCode(): Observable<boolean> {
    return Observable.timer(100).map((v, i) => true);
  }

}

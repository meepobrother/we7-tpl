import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements OnInit {
  @Input() props: any = {
    label: '',
    placeholder: '',
    type: 'text',
    input: 'tel'// number/digit/qq/email/tel/mobile/idcard
  };

  @Input() res: any = {
    mobile: ''
  }


  constructor() { }

  ngOnInit() {
  }

  

}

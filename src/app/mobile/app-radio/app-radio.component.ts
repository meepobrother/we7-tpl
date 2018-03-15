import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './app-radio.component.html',
  styleUrls: ['./app-radio.component.scss']
})
export class AppRadioComponent implements OnInit {
  radio: any[] = [
    { id: 1, name: 'asdf1' },
    { id: 2, name: 'asdf2' }
  ];
  constructor() { }

  ngOnInit() {
  }

}

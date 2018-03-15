import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './app-checkbox.component.html',
  styleUrls: ['./app-checkbox.component.scss']
})
export class AppCheckboxComponent implements OnInit {
  checkbox: any[] = [ 'A', 'B' ];
  res: any = {
    checkbox: []
  };
  constructor() { }

  ngOnInit() {
  }

  onAddCheckbox() { }

}

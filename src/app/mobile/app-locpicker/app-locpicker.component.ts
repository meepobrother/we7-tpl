import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locpicker',
  templateUrl: './app-locpicker.component.html',
  styleUrls: ['./app-locpicker.component.scss']
})
export class AppLocpickerComponent implements OnInit {
  @Input() props: any = {
    label: '位置',
    placeholder: '请选择您的位置'
  };
  constructor() { }

  ngOnInit() {
  }

  onPickerLocation(){}

}

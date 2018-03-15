import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PickerData, PickerOptions, PickerService } from 'ngx-weui/picker';
import { DATA } from './cn';
@Component({
  selector: 'app-picker',
  templateUrl: './app-picker.component.html',
  styleUrls: ['./app-picker.component.scss']
})
export class AppPickerComponent implements OnInit {
  cityData: any = DATA;
  @Input() model: any = '';
  @Input() props: any = {
    label: '城市',
    placeholder: '请选择城市'
  };
  @Input() type: string = 'time';
  @Output() modelChange: EventEmitter<any> = new EventEmitter();
  constructor(
    private srv: PickerService
  ) { }

  ngOnInit() { }
  onShowBySrv(type: string) {
    switch (type) {
      case 'city':
        this.srv.showCity(this.cityData).subscribe((res: any) => {
          this.model = res.value;
          this.modelChange.emit(this.model);
        });
        break;
      case 'date-ym':
        this.srv.showDateTime(type).subscribe((res: any) => {
          this.model = res.value;
          this.modelChange.emit(this.model);
        });
        break;
      case 'date':
        this.srv.showDateTime(type).subscribe((res: any) => {
          this.model = res.value;
          this.modelChange.emit(this.model);
        });
        break;
      case 'datetime':
        this.srv.showDateTime(type).subscribe((res: any) => {
          this.model = res.value;
          this.modelChange.emit(this.model);
        });
        break;
      case 'time':
        this.srv.showDateTime(type).subscribe((res: any) => {
          this.model = res.value;
          this.modelChange.emit(this.model);
        });
        break;
    }
  }

}

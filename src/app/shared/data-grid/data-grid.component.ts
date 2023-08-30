import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from 'chart.js';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {

  @Input() headers: Array<{title: string, columnName: string}> | undefined;
  @Input() data: Array<any> | undefined;
  @Input() actions: Array<{title: string, color: Color}> | undefined;
  @Input() isShowCheckBox: boolean = false;
  @Output() actionClickEvent: EventEmitter<Object> = new EventEmitter<Object>();


  actionClick(data: any, action: any): void {
    data.action = action.title;
    this.actionClickEvent.emit(data);
  }
}

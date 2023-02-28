import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APISEndPoint } from '../constant/common.constant';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() data:any;
  @Input() response:any;
  @Output() newItemEvent = new EventEmitter<number>();
  constructor(private http:HttpClient, private commonService: CommonService) { }

  ngOnInit(): void {
  }
  getAllAdmin =async (page:any, limit=10,) => {
    
  }
  addNewItem(value: number) {    
    this.newItemEvent.emit(value);
  }
}

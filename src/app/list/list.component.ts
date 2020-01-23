import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() data: Object[]
  @Output() EditEmit = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  edit(id){
    this.EditEmit.emit(id)
  }
}

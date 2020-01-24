import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Client} from '../data/client.data'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() data: Client[]
  @Output() EditEmit = new EventEmitter()
  @Output() backEmit = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  edit(client){
    this.EditEmit.emit(client)
  }
  goCreateLoan(){
    alert("create Loan")
  }

  showDetail(){
    alert("show Datails")
  }
}

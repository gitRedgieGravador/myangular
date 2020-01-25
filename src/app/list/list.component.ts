import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Client} from '../data/client.data'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() data: Client[]
  @Output() EditEmit = new EventEmitter()
  @Output() backEmit = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit(client){
    this.EditEmit.emit(client)
  }
  goCreateLoan(){
    this.router.navigate(['loan'])
  }

  showDetail(){
    alert("show Datails")
  }
}

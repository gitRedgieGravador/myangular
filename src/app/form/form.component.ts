import { Component, OnInit } from '@angular/core';

import { Client } from '../data/client.data'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname: String;
  lname: String;
  address: String;
  pNum: String;

  dataArray: Client[] = [];
  data: Client;
  autoId = 0;
  editId = 0;
  editing = false;
  showTable = false

  constructor(private http: HttpClient) { }

  ngOnInit() {
    alert(this.getConfig("https://qofbe721ad.execute-api.us-east-1.amazonaws.com/dev/upload"));
  }
  getConfig(configUrl) {
    return this.http.get(configUrl);
  }
  submit() {
    this.autoId++;
    this.data = {
      id: this.autoId,
      fname: this.fname,
      lname: this.lname,
      address: this.address,
      pNum: this.pNum
    }
    this.dataArray.push(this.data)
    this.showTable = true
  }
  editData(client) {
    this.showTable = false
    this.fname = client.fname
    this.lname = client.lname
    this.address = client.address
    this.pNum = client.pNum
    this.editId = client.id
    this.editing = true

  };

  save() {
    for (let iterator of this.dataArray) {
      console.log(iterator.id);
      if (iterator.id == this.editId) {
        iterator.fname = this.fname
        iterator.lname = this.lname
        iterator.address = this.address
        iterator.pNum = this.pNum
        this.editing = false
        this.showTable = true
      }
    }
  }

  goBackForm(){
    this.showTable = false
  }
}



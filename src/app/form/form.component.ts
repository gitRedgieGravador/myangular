import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fname: String;
  lname:String;
  address:String;
  pNum:String;

  dataArray:Object[]=[];
  data:Object;
  autoId = 0;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.autoId++;
    this.data = {
      id:this.autoId,
      fname: this.fname,
      lname: this.lname,
      address: this.address,
      pNum: this.pNum
    }
    this.dataArray.push(this.data)
    console.log(this.dataArray);
    $("input").val("");
  }
  editData(id){
    this.dataArray.forEach(element => {
      if(element.id == id){
        this.fname = element.fname
        this.lname = element.lname
        this.address = element.address
        this.pNum = element.pNum
      }
    });
  }

}

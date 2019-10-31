import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  todaydate = new Date();

  months = ["January", "Feburary", "March" , "April", "May" , "June", "July", "August", "September", "October", "November", "December"];

  isavailable = true; 

  myClickFunction(event) { 
    alert("Button is clicked");
    console.log(event);
  } 

  changemonths(event) {
    alert("Changed month from the Dropdown");
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = 'test'

  todaydate

  months = ["January", "Feburary", "March" , "April", "May" , "June", "July", "August", "September", "October", "November", "December"];

  isavailable = true; 

  constructor(private TimeService: TimeService) { }

  myClickFunction(event) { 
    alert("Button is clicked");
    console.log(event);
  } 

  changemonths(event) {
    alert("Changed month from the Dropdown");
    console.log(event);
  }

  ngOnInit() {
    this.todaydate = this.TimeService.showTodayDate();
  }

}
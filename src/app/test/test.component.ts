import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

                                                                                                                                                                     
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = 'test'
  todaydate
  name
  data: any
  searchparam = 2

  months = ["January", "Feburary", "March" , "April", "May" , "June", "July", "August", "September", "October", "November", "December"];

  isavailable = true; 

  constructor(private TimeService: TimeService,
              private http: HttpClient ) { }

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

    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(response => console.log(response));
  }

converttoarray(data) {
  console.log(data);
   this.name = data[0].name;
}


}
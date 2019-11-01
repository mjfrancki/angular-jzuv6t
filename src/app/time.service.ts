import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }

 showTodayDate() {
    let ndate = new Date();
    return ndate;
 }  

}
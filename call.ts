import {Hr} from './abstract' ;
//if Hr class has no constructor but its parent class Employee has.so we have to give.
let hr = new Hr("LUMP",9000,"12PM","HYD");
console.log(hr.showSalary());
// hr.arrangeMeeting();
// hr.cancelMeeting();
console.log( hr.schedule());

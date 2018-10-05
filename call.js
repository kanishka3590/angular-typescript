"use strict";
exports.__esModule = true;
var abstract_1 = require("./abstract");
//if Hr class has no constructor but its parent class Employee has.so we have to give.
var hr = new abstract_1.Hr("LUMP", 9000, "12PM", "HYD");
console.log(hr.showSalary());
// hr.arrangeMeeting();
// hr.cancelMeeting();
console.log(hr.schedule());

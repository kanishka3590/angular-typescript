var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstract class can implement interface but have to implement all properties.
var Employee = /** @class */ (function () {
    function Employee(name, salary, time, place) {
        this.name = name;
        this.salary = salary;
        this.time = time;
        this.place = place;
    }
    Employee.prototype.showSalary = function () {
        return this.salary;
    };
    //interface method.we have to give body
    Employee.prototype.schedule = function () {
        return "The time is " + this.time + " and place " + this.place;
    };
    return Employee;
}());
//we can't do this.can't create instance of abstract class.
//let employee = new Employee("mn",09);
var Hr = /** @class */ (function (_super) {
    __extends(Hr, _super);
    function Hr(name, salary, time, place) {
        var _this = _super.call(this, name, salary, time, place) || this;
        _this.name = name;
        _this.salary = salary;
        _this.time = time;
        _this.place = place;
        return _this;
    }
    //it must be implemented.
    Hr.prototype.arrangeMeeting = function () {
        console.log("YOur Meeting is Arranged !!!");
    };
    //normal generic method. 
    Hr.prototype.cancelMeeting = function () {
        console.log("YOur Meeting Has Canceld");
    };
    return Hr;
}(Employee));
//if Hr class has no constructor but its parent class Employee has.so we have to give.
var hr = new Hr("LUMP", 9000, "12PM", "HYD");
console.log(hr.showSalary());
// hr.arrangeMeeting();
// hr.cancelMeeting();
console.log(hr.schedule());

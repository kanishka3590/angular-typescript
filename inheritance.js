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
var Vehicles = /** @class */ (function () {
    function Vehicles(name, company, price) {
        this.name = name;
        this.company = company;
        this.price = price;
    }
    Vehicles.prototype.vehicleDetails = function () {
        console.log("The Vehicle is " + this.name + "\n        Vehicle Company is " + this.company + "\n        Vehicle price is " + this.price);
    };
    return Vehicles;
}());
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoWheeler.prototype.run = function () {
        return this.speed;
    };
    return TwoWheeler;
}(Vehicles));
var twoWheeler = new TwoWheeler("XYZ", "MKOI", 9900000); //because constructor of parent class.
twoWheeler.vehicleDetails();
twoWheeler.speed = 89;
var speed = twoWheeler.run();
console.log("the vehicle is " + twoWheeler.name + " and runs speed on " + speed);

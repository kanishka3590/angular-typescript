var Vehicles1 = /** @class */ (function () {
    function Vehicles1(name, company, price) {
        this.name = name;
        this.price = price;
    }
    Vehicles1.prototype.vehicleDetails = function () {
        console.log("The Vehicle is " + this.name + "\n         Vehicle Company is " + Vehicles1.company + " \n         Vehicle price is " + this.price);
    };
    Vehicles1.vehicleStatic = function () {
        console.log("\n        Vehicle Company is " + Vehicles1.company + " \n        ");
    };
    Vehicles1.company = "XYZ"; //(one time allocation memory)
    return Vehicles1;
}());
var TwoWheelers = /** @class */ (function () {
    function TwoWheelers() {
        this.company = Vehicles1.company;
    }
    TwoWheelers.prototype.run = function () {
        console.log(company);
    };
    return TwoWheelers;
}());
var v = new Vehicles1();
v.vehicleDetails();
var company = Vehicles1.company; //access variables with the class name.
console.log(company);
Vehicles1.vehicleStatic(); //access function with class name
var vw = new TwoWheelers();
vw.run();

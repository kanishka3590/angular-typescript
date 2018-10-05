//constructor.we can have only and only one constructor in type-script.
var Pizza2 = /** @class */ (function () {
    //we can make any value optional in end of parameters.
    function Pizza2(name, size, type, price) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.price = price;
    }
    Pizza2.prototype.makePizza = function (price) {
        console.log("!!!!!!!!!!!!! Order Came !!!!!!!!!!!!!");
        console.log("Order is Ready . PAY : ", price);
    };
    Pizza2.prototype.orderPizza = function () {
        console.log("Order Placed : Details :  \n         name : " + this.name + "\n         size : " + this.size + "\n         type : " + this.type + "\n         ");
        this.makePizza(this.price);
    };
    return Pizza2;
}());
var pizzaObj = new Pizza2("Corn Pizza", 20, "veg"); //now here we have not given any value to price.
// it will not give any error.because we have created it as optional.s
pizzaObj.orderPizza();
//now defaut value will change the value with below values.
pizzaObj.name = "Corn Pizza";
pizzaObj.size = 20;
pizzaObj.type = "veg";
//pizzaObj.price = 100;
pizzaObj.orderPizza();

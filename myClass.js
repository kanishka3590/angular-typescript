var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.makePizza = function (price) {
        console.log("!!!!!!!!!!!!! Order Came !!!!!!!!!!!!!");
        console.log("Order is Ready . PAY : ", price);
    };
    Pizza.prototype.orderPizza = function () {
        console.log("Order Placed : Details :  \n        name : " + this.name + "\n        size : " + this.size + "\n        type : " + this.type + "\n        ");
        this.makePizza(this.price);
    };
    return Pizza;
}());
//let pizza : Pizza; //reference variable for class.cant access the methods
var pizza = new Pizza(); //creating object.we can write it as //let pizza = new Pizza()
pizza.name = "Corn Pizza";
pizza.size = 20;
pizza.type = "veg";
pizza.price = 100;
pizza.orderPizza();
var pizza2 = new Pizza();
pizza2.name = "Baby Corn Pizza";
pizza2.size = 10;
pizza2.type = "veg";
pizza2.price = 600;
pizza2.orderPizza();

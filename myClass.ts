class Pizza{
   name : string;
   size : number;
   type : string;
   price : number;

   
   makePizza(price):void{
    console.log("!!!!!!!!!!!!! Order Came !!!!!!!!!!!!!");
    console.log("Order is Ready . PAY : ",price);
    
}

    orderPizza():void{
        console.log(`Order Placed : Details :  
        name : ${this.name}
        size : ${this.size}
        type : ${this.type}
        `);
    this.makePizza(this.price);       
    }


   
}
//let pizza : Pizza; //reference variable for class.cant access the methods
let pizza :Pizza =new Pizza(); //creating object.we can write it as //let pizza = new Pizza()
pizza.name = "Corn Pizza";
pizza.size = 20;
pizza.type = "veg";
pizza.price = 100;
pizza.orderPizza();


let pizza2 = new Pizza(); 
pizza2.name = "Baby Corn Pizza";
pizza2.size = 10;
pizza2.type = "veg";
pizza2.price = 600;
pizza2.orderPizza();
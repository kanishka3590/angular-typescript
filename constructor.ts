//constructor.we can have only and only one constructor in type-script.

class Pizza2{
    name : string;
    size : number;
    type : string;
    price : number;
 //we can make any value optional in end of parameters.
    constructor(name:string,size:number,type:string,price?:number){
        this.name = name;
        this.size = size;
        this.type = type;
        this.price = price;
    }
 
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
 let pizzaObj =new Pizza2("Corn Pizza",20,"veg"); //now here we have not given any value to price.
// it will not give any error.because we have created it as optional.s
 pizzaObj.orderPizza();
//now defaut value will change the value with below values.
pizzaObj.name = "Corn Pizza";
pizzaObj.size = 20;
pizzaObj.type = "veg";
//pizzaObj.price = 100;

 pizzaObj.orderPizza();
 
 

 class Vehicle{
    // private name : string;
    // public brand : string;
    // public company :  string;
    // public type :  string;
    //if we give access modifier inside constructor then there is no need to define that variable.
    constructor(private name: string,public brand : string,public company :  string,public type :  string){

    }

    public run(): void{
        console.log(`${this.name}`);
        

    }
}

let bike = new Vehicle("XYZ","123","MJI","kmnj");
bike.run();
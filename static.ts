class Vehicles1 {
    public name : string;
    public static company : string = "XYZ"; //(one time allocation memory)
    public price : number;
     constructor(name?: string,company ?: string,price?:number){
         this.name= name;
         this.price=price;        
     }
     vehicleDetails():void{ //now no need object to access the property of company.
         console.log(`The Vehicle is ${this.name}
         Vehicle Company is ${Vehicles1.company} 
         Vehicle price is ${this.price}`);
         
     }
     public static vehicleStatic():void{ //static function can have only static variables.
        console.log(`
        Vehicle Company is ${Vehicles1.company} 
        `);  
     }
 }
 class TwoWheelers{ // accessing static property of one class to other class
    company =  Vehicles1.company; 
    run(){
         console.log(company);
     }
     
 }
 let v = new Vehicles1();
 v.vehicleDetails();
let company = Vehicles1.company; //access variables with the class name.
console.log(company);
Vehicles1.vehicleStatic();//access function with class name

let vw = new TwoWheelers();
vw.run();
class Vehicles {
   public name : string;
   public company : string;
   public price : number;
    constructor(name: string,company : string,price:number){
        this.name= name;
        this.company= company;
        this.price=price;        
    }
    vehicleDetails():void{
        console.log(`The Vehicle is ${this.name}
        Vehicle Company is ${this.company}
        Vehicle price is ${this.price}`);
        
    }
}
class TwoWheeler extends Vehicles{
    public color : string;
    public speed : number;
    public run():number{
        return this.speed;
    }
    constructor(){
        super("XYZ","MKOI",9900000); // super class constructor 
    }
}
//let twoWheeler = new TwoWheeler("XYZ","MKOI",9900000); //because constructor of parent class.
let twoWheeler = new TwoWheeler();// if create constructor in both classes then in that we have to give super()
twoWheeler.vehicleDetails();
twoWheeler.speed = 89;
var speed = twoWheeler.run();
console.log(`the vehicle is ${twoWheeler.name} and runs speed on ` + speed);

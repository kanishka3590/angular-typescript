interface Meeting{
    time:string;
    place:string;
    schedule():string;
}

//abstract class can implement interface but have to implement all properties.
abstract class Employee implements Meeting{
     constructor(public name:string,public salary:number,public time:string,public place:string){

    }
    showSalary(){
        return this.salary;
    }
    //this must be implemented by other class.
    abstract arrangeMeeting():void;

    //we according to interface we have to implement here.but we dont want to implement here.
    //so we are redirecting to child class.there we have to give the body.so we make it abstract.
    abstract schedule():string;

    
   
}
//we can't do this.can't create instance of abstract class.
//let employee = new Employee("mn",09);

//we can export this class to other file(call.ts).from that file we can use. 
export class Hr extends Employee{
    constructor(public name:string,public salary:number,public time:string,public place:string){
        super(name,salary,time,place);
    }
    //it must be implemented.
    arrangeMeeting():void{
        console.log("YOur Meeting is Arranged !!!");
        
    }
    //normal generic method. 
    cancelMeeting():void{
        console.log("YOur Meeting Has Canceld");
        
    }
    //interface method.we have to give body.
    schedule():string{
        return "The time is "+this.time+" and place "+this.place;
    }
}

// //if Hr class has no constructor but its parent class Employee has.so we have to give.
// let hr = new Hr("LUMP",9000,"12PM","HYD");
// console.log(hr.showSalary());
// // hr.arrangeMeeting();
// // hr.cancelMeeting();
// console.log( hr.schedule());
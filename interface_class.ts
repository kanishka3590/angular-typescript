interface Movie{
    name : string;
    theater : string;
    time : string;
    show():string;
    info?():string;

}
interface Parking{
    parking_time : string;
    price:number;
    parkIn():string;

}


class Ticket implements Movie,Parking{
    parking_time:string;
    price:number;
    name : string;
    theater : string;
    time : string;
    constructor(name:string,theater:string,time:string){
        this.name = name;
        this.theater = theater;
        this.time = time;
    }
    show():string{
        return " YOu Movie "+this.name +" in "+this.theater+" at "+this.time;
    }
    parkIn():string{
        return "PArking DOne...Go ENjoy";
    }

}
class Ticket2 implements Movie{
    name : string;
    theater : string;
    time : string;
    constructor(name:string,theater:string,time:string){
        this.name = name;
        this.theater = theater;
        this.time = time;
    }
    show():string{
        return this.getShow();
    }
    getShow():string{
        return "REturning";
    }

}
let ticket = new Ticket("LMJK","I Maz","YUUII");
console.log(ticket.show());
console.log(ticket.parkIn());

let ticket2 = new Ticket2("LMJK","I Maz","YUUII");
console.log(ticket2.show());

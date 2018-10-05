// function showMessage(message){
//     console.log('Hi...',message);
    
// }
// showMessage('Kanishka');
let message : string;
message='Message';
console.log(message);


let msg : string='Message we can give like this';
console.log(msg);

let no:number;
no=12345;
console.log(no);

let isHungry:boolean=true;
console.log(isHungry);
 
let data:undefined=undefined;
console.log(data);

let a:undefined;
console.log(a);

let b; //type will be 'any' here if we are not giving any type.
console.log(b);

let c:any;
c=12;
c='tr';
c=true;
console.log(c);
//it will print last one means true.

//function declation with void return type.
function showMe():void{

}
//array declartion
let listOfNumber:number[] = [11,22,33,44,55];
let listOfBoolen:boolean[]=[true,false,false];
let listOfString:string[]=['a','b','c','d'];

//tuple declartion.we have to give only two.nd one have to string and second is number.
let tuple1:[string,number];
tuple1 = ["abc",9876];
console.log(tuple1);


listOfNumber.forEach(element=>{
    console.log(element);
})

//enum deaclration.
enum Grades {A="Pass",B="Only Pass",C=123,D="Bad and pass with grace",E="Fail"};
console.log(Grades.A);
console.log(Grades.B);
console.log(Grades.C);
console.log(Grades.D);
console.log(Grades.E);

//never type
function showMessage(msg):never{
    throw new Error(msg);
}




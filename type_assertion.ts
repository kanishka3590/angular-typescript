let msz= "My Message";
let len = msz.length;

//normally it will not take as a string.bcz we just declare but not define as a string.
//so have to do type assertion like this.
let msz1;
msz1 = "Not Confirm It Is string or not";
console.log(msz1.length);
//if we will give this it will not give intelligence but when it will convert into js file it will give
//output.but we should do assertion. 

let len1 = (<string>msz1).length;
console.log(len);
console.log(len1);

let msz2;
msz2 = "This is new Assertion doing option";
let smallCase=(msz2 as string).toLocaleLowerCase(); 
console.log(smallCase);

let list:number[]=[1,2,3,4,5];
let list1:Array<number>=[1,2,3,4,5,6,7]; //assertion in array.
let list2:any[]=[]

let list3;
//list3=Array<any>=[1,2,'abc'];
console.log();

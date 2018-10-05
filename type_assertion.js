var msz = "My Message";
var len = msz.length;
//normally it will not take as a string.bcz we just declare but not define as a string.
//so have to do type assertion like this.
var msz1;
msz1 = "Not Confirm It Is string or not";
console.log(msz1.length);
//if we will give this it will not give intelligence but when it will convert into js file it will give
//output.but we should do assertion. 
var len1 = msz1.length;
console.log(len);
console.log(len1);
var msz2;
msz2 = "This is new Assertion doing option";
var smallCase = msz2.toLocaleLowerCase();
console.log(smallCase);
var list = [1, 2, 3, 4, 5];
var list1 = [1, 2, 3, 4, 5, 6, 7]; //assertion in array.
var list2 = [];
var list3;
//list3=Array<any>=[1,2,'abc'];
console.log();

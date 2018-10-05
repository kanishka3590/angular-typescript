// function showMessage(message){
//     console.log('Hi...',message);
// }
// showMessage('Kanishka');
var message;
message = 'Message';
console.log(message);
var msg = 'Message we can give like this';
console.log(msg);
var no;
no = 12345;
console.log(no);
var isHungry = true;
console.log(isHungry);
var data = undefined;
console.log(data);
var a;
console.log(a);
var b; //type will be 'any' here if we are not giving any type.
console.log(b);
var c;
c = 12;
c = 'tr';
c = true;
console.log(c);
//it will print last one means true.
//function declation with void return type.
function showMe() {
}
//array declartion
var listOfNumber = [11, 22, 33, 44, 55];
var listOfBoolen = [true, false, false];
var listOfString = ['a', 'b', 'c', 'd'];
//tuple declartion.we have to give only two.nd one have to string and second is number.
var tuple1;
tuple1 = ["abc", 9876];
console.log(tuple1);
listOfNumber.forEach(function (element) {
    console.log(element);
});
//enum deaclration.
var Grades;
(function (Grades) {
    Grades["A"] = "Pass";
    Grades["B"] = "Only Pass";
    Grades[Grades["C"] = 123] = "C";
    Grades["D"] = "Bad and pass with grace";
    Grades["E"] = "Fail";
})(Grades || (Grades = {}));
;
console.log(Grades.A);
console.log(Grades.B);
console.log(Grades.C);
console.log(Grades.D);
console.log(Grades.E);
//never type
function showMessage(msg) {
    throw new Error(msg);
}

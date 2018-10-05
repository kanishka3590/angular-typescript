var bal = 500;
var index;
for (index = 0; index < 20; index++) {
    var opt = prompt("Enter Your Choice :\n        1. Balance\n        2. Withdrawal\n        3. Deposit\n        4. Exit");
    switch (opt) {
        case '1':
        case 'balance':
        case 'Balance':
            balance();
            break;
        case '2':
        case 'withdrawal':
        case 'Withdrawal':
            withdrawal();
            balance();
            break;
        case '3':
        case 'deposit':
        case 'Deposit':
            deposit();
            balance();
            break;
        case '4':
            break;
        default:
            alert("You Have Entered Wrong Choice");
    }
}
function balance() {
    alert("Your Current Balance is : " + bal);
}
function withdrawal() {
    var amount = Number(prompt("How much You want to Withdraw :"));
    bal = bal - amount;
    if (bal <= 500) {
        bal = bal + amount;
        alert("You can't withdraw, Insufficiant Balance");
        return bal;
    }
    else {
        alert("Withdrawal : " + amount);
        return bal;
    }
}
function deposit() {
    var amount = Number(prompt("How much You want to Deposit :"));
    bal = (bal + amount);
    alert("Successfully Deposite : " + amount);
    return bal;
}

var Ticket = /** @class */ (function () {
    function Ticket(name, theater, time) {
        this.name = name;
        this.theater = theater;
        this.time = time;
    }
    Ticket.prototype.show = function () {
        return " YOu Movie " + this.name + " in " + this.theater + " at " + this.time;
    };
    Ticket.prototype.parkIn = function () {
        return "PArking Go ENjoy";
    };
    return Ticket;
}());
var Ticket2 = /** @class */ (function () {
    function Ticket2(name, theater, time) {
        this.name = name;
        this.theater = theater;
        this.time = time;
    }
    Ticket2.prototype.show = function () {
        return this.getShow();
    };
    Ticket2.prototype.getShow = function () {
        return "REturning";
    };
    return Ticket2;
}());
var ticket = new Ticket("LMJK", "I Maz", "YUUII");
console.log(ticket.show());
console.log(ticket.parkIn());
var ticket2 = new Ticket2("LMJK", "I Maz", "YUUII");
console.log(ticket2.show());

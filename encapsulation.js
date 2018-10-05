var Company = /** @class */ (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "Income", {
        //we can do this like this
        // public getIncome():number{
        //     return this.income;
        // }
        // public setIncome(income: number):void{
        //     this.income = income;
        // }
        get: function () {
            return this.income;
        },
        set: function (income) {
            this.income = income;
        },
        enumerable: true,
        configurable: true
    });
    return Company;
}());
var company = new Company();
company.Income = 90000;
console.log("salay ", company.Income);
// company.setIncome(600000);
// console.log("Salary : ",company.getIncome());

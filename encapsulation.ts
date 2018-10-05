class Company{
    public name : string;
    public size : number;
    public rating : number;
    private income : number;
    private type : string;

    //we can do this like this
    // public getIncome():number{
    //     return this.income;
    // }
    // public setIncome(income: number):void{
    //     this.income = income;
    // }

    //get and set method,now function is as property.
    public get Income():number{
            return this.income;
        }
        public set Income(income: number){
            this.income = income;
        }
}
let company = new Company();
company.Income = 90000; //now function is as property. now here set income is calling inside.
console.log("salay ", company.Income);// here get income.

// company.setIncome(600000);
// console.log("Salary : ",company.getIncome());

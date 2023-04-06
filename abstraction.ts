abstract class Customer{
    CustomerName:string;
    Age:number;
    Address:String;
    ContactNumber:number;
    constructor(CustomerName:string,Age:number,Address:string,ContactNumber:number){
        this.CustomerName=CustomerName;
        this.Age=Age;
        this.Address=Address;
        this.ContactNumber=ContactNumber;

    }
    public abstract Display():any;
}

class Loan extends Customer{
    LoanAccountNo:number;
    LoanType:string;
    LoanAmount:number;
    Duration:number;
    InterestRate:number;
     constructor(CustomerName:string,Age:number,Address:string,ContactNumber:number,LoanAccountNo:number,LoanType:string,LoanAmount:number,Duration:number,InterestRate:number){
        super(CustomerName,Age,Address,ContactNumber);
        this.LoanAccountNo=LoanAccountNo;
        this.LoanType=LoanType;
        this.Duration=Duration;
        this.LoanAmount=LoanAmount;
        this.InterestRate=InterestRate;
    }
    TotAmount:number;
    public interestCalculate():void{
        this.TotAmount=this.LoanAmount*this.InterestRate;
    }
    public Display() {
        console.log(`Customer Name: ${this.CustomerName}\n Age:${this.Age}\nAddress:${this.Address}\n Contact Number:${this.ContactNumber}
        \n Loan account No:${this.LoanAccountNo}\n LoanType:${this.LoanType}\n LoanAmount:${this.LoanAmount}\n Duration:${this.Duration}
        \nInterest Rate:${this.InterestRate}\n TOtal Amount:${this.TotAmount}`)
    }

}

var obj2 = new Loan("Balu",45,"Coimbatore",12732711,4352,"Fixed",4000,20,2.25);
obj2.interestCalculate();
obj2.Display();

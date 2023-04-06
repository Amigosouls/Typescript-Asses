interface ISavingAccount{
    acc_no:number;
    balance:number;
    cust_name:string;
    Balance(acc_no?:any,balance?:number,cust_name?:any):any;
}
interface ISCurrentAccount{
    acc_no:number;
    balance:number;
    cust_name:string;
    Balance(acc_no?:any,balance?:number,cust_name?:any,interest?:any):any;
}

class Account implements ISCurrentAccount,ISavingAccount{
    acc_no: number;
    balance:number;
    cust_name:string;
    Balance(acc_no?:any,balance?:any,cust_name?:any,interest?:any){
        console.log("Account no:",acc_no);
        console.log("Balance:",balance*interest);
        console.log("Customer Name:",cust_name)
    }
}

var obj:ISCurrentAccount = new Account();
obj.Balance(1012,1300,"Victor");
var obj3:ISCurrentAccount = new Account();
obj3.Balance(1012,2300,"Victor",0.45);
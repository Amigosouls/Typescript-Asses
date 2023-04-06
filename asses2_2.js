var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.Balance = function (acc_no, balance, cust_name, interest) {
        console.log("Account no:", acc_no);
        console.log("Balance:", balance * interest);
        console.log("Customer Name:", cust_name);
    };
    return Account;
}());
var obj = new Account();
obj.Balance(1012, 1300, "Victor");
var obj3 = new Account();
obj3.Balance(1012, 2300, "Victor", 0.45);

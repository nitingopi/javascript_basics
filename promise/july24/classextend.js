class Account{
    constructor(an, hn, bal){
        this.accountNumber = an;
        this.holdersName = hn;
        this.balance = bal;
    }
}

class savingsAccount extends Account{
    constructor(an, hn, bal, min){
        super(an, hn, bal);
        this.minBalance = min;
    }
}

const acct = new savingsAccount(1, "Brendan", 1000, 500);
console.log(acct); 
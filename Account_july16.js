class Account {
    #_accountNumber = 0;
    #_holdersName = "";
    #_balance = 0;

    constructor(an, hn, bal) {
        this.#_accountNumber = an;
        this.#_holdersName = hn;
        this.#_balance = bal;
    }

    set balance(newValue){
        // this.#_balance *= 2;
        this.#_balance = newValue;
        console.log("zeroed the value");
    }

    get balance(){
        return this.#_balance;
    }

    deposit(amount) {
        this.#_balance += amount;
    }

    withdraw(amount) {
        this.#_balance -= amount;
    }

    print() {
        console.log(this.#_accountNumber, this.#_holdersName, this.#_balance);
    }
}

const eich = new Account(1, "Brendan Eich", 100000.0);
eich.print();

eich.deposit(5000);
eich.print();

eich.withdraw(5000);
eich.print();

// eich.#_balance = 0;

eich.balance = 0;
eich.print();

console.log("Printing balance", eich.balance);


var item = 3;
goal = "singing";
function Employee(id, name){
    this.id = id;
    this.name = name;

    Employee.count = 0;

    Employee.prototype.baseSalary = 50000.00;

    this.print = function(){
        console.log(`id = ${this.id}, name = ${this.name}`);
    }

    Employee.prototype.print_details = function(){
        console.log(`id = ${this.id}, name  = ${this.name}`);
    }
}

var eich = new Employee(1, "Brendan");
console.log("end");

// Study case : Payment Service
/* BAD Example
* Reason for using this principle : to erase direct depedency PaymentService from PostgresDatabase
* High Level :
* (Payment Service)
* - database
* + paymentIsValid()
* + openDatabase()
* + addNewPayment()
* + removePaymentByID()
* + updatePaymentByID()
*
* (Database)
* + insert()
* + update()
* + delete()
*
* Low Level :
* PostgresDatabase
* + insert()
* + update()
* + delete()
*
* MongoDatabase
* + insert()
* + update()
* + delete()
*
* */

/**
 * create 1 abstract class of database as a media for PaymentService constructor
 * this will force any class to have all interface that Database have
 */
class Database {
    constructor() {
        if (this.constructor === Database)
            throw new TypeError(`Abstract class "${this.constructor.name}" cannot be instantiated directly.`);
    }
    insert() {
        throw new Error('You have to implement the method insert!');
    }
    update() {
        throw new Error('You have to implement the method update!');
    }
    delete() {
        throw new Error('You have to implement the method delete!');
    }
}

class PostgresDB extends Database {
    constructor() {
        super();
        console.log("Init PostgresDB");
    }
    insert(){
        // implement code
    }
    update(){
        // implement code
    }
    delete(){
        // implement code
    }
}

class MongoDB extends Database {
    constructor() {
        super();
        console.log("Init MongoDB");
    }
    insert(){
        // implement code
    }
    update(){
        // implement code
    }
    delete(){
        // implement code
    }
}

class PaymentService {
    // you can pass mongo or postgre here
    constructor(database) {
        // this is private variable
        this._database = database;
    }

    paymentIsValid(data){
        // Implementation code
        try {
            let result = this._database.insert(data);
            return result
        } catch (err) {
            throw new Error('service.paymentIsValid() -> ' + err.message);
        }
    }

    openDatabase(){
        // implementation code
    }

    addNewPayment() {
        // Implementation code
    }

    removePaymentByID() {
        // Implementation code
    }

    updatePaymentByID() {
        // Implementation code
    }
}

// init payment service base by selected database
function NewPayment(DB_NAME){
    let DB;
    if (DB_NAME === "Mongo") {
        DB = new MongoDB();
    } else {
        DB = new PostgresDB();
    }
    return new PaymentService(DB);
}

module.exports = {
    newPayment: NewPayment
}

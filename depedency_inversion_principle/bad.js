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
class PostgresDatabase {
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
    constructor(database) {
        // this is private variable
        this._database = database;
    }

    paymentIsValid(){
        // Implementation code
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

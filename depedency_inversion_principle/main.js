const service = require('./good');
const paymentMongo = service.newPayment("Mongo");
const paymentPostgre = service.newPayment("Postgre");


console.log(paymentMongo);
console.log(paymentPostgre);

try {
    let res1 = paymentPostgre.paymentIsValid("SOMETHING");
    console.log(res1);
} catch (err) {
    console.log(err);res2
}

try {
    let res2 = paymentMongo.paymentIsValid("SOMETHING");
    console.log("SUCCESS MONGO");
} catch (err) {
    console.log(err);
}

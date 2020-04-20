// let's create small interface
let eWalletProviderMixins = Base => class extends Base {
    accountID(){}
    walletProviderID(){}
}

let bankProviderMixins = Base => class extends Base {
    bankID(){}
    virtualAccount(){}
}

class PaymentProvider {
    paymentName(){}
    amount(){}
}
/*
* After we create smaller interface rather than big interface
* we can easily divide to 2 different section
* example :
* eWallet -> OVO, Gopay
* Bank -> Mandiri, BNI
* */

class Gopay extends eWalletProviderMixins(PaymentProvider) {
    paymentName(){}
    amount(){}
    accountID() {}
    walletProviderID() {}
}

class OVO extends eWalletProviderMixins(PaymentProvider) {
    paymentName(){}
    amount(){}
    accountID() {}
    walletProviderID() {}
}

class Mandiri extends bankProviderMixins(PaymentProvider) {
    paymentName(){}
    amount(){}
    bankID() {}
    virtualAccount() {}
}

class BNI extends bankProviderMixins(PaymentProvider) {
    paymentName(){}
    amount(){}
    bankID() {}
    virtualAccount() {}
}

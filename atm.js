const {pin, bal} = require('./account')



function getBalance(){
    console.log(bal)
}



function withdrawMoney(amount){
    let newBal = bal - amount;
    return newBal;
}



 

function deposit(cashFlow){ 
    let moreMon = bal + cashFlow
    console.log(moreMon);

}

function validatePin(){


}










module.exports = {
    getBal: getBalance,
    withDr: withdrawMoney,
    depo: deposit,
    val: validatePin,
}

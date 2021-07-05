const {pin, bal} = require('./account')
const prompt = require('prompt-sync')()



function getBalance(){
    console.log(bal)
}



function withdrawMoney(amount){
    let newBal = bal - amount;
    console.log(newBal);
}



 

function deposit(cashFlow){ 
    let moreMon = bal + cashFlow
    console.log(moreMon);

}

function validatePin(){
    let yourPin = prompt("Enter your pin ")
    if (yourPin == pin){
        console.log("PIN Verified")
        return yourPin;
    }

}










module.exports = {
    getBal: getBalance,
    withDr: withdrawMoney,
    depo: deposit,
    validatePin: validatePin,
}

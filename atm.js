const {pin, bal} = require('./account')



function getBalance(){
    alert("You have a remaining balance of: "+balance)
}



function withdrawMoney(amount){
    if (amount %5 == 0){
     let newBal = bal - amount;
     return newBal
    }
    else if (amount >= balance){
        alert('You have Insufficient');
        return false;
    } 
    
    // balance = balance - amount -0.50;
    // console.log("Your funds have successfully been transfered. \n Your new balance is "+balance)

}   

function depostie(){


}

function validatePin(){


}










module.exports = {
    getBal: getBalance,
    withDr: withdrawMoney,
    depo: depostie,
    val: validatePin,
}

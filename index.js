const { bal } = require('./account')
const { getBal, withDr, depo } = require('./atm')
const atm = require('./atm')
const prompt = require('prompt-sync')()
const {validatePin} = require("./atm")
atm.validatePin()

do{
let userInput = prompt("Would you like to see your funds? yes or no. ")
    if(userInput == "yes"){
        getBal()
    }



let userInput2 = prompt("Would you like to deposit, withdraw, or exit. ")
    switch(userInput2){
        case "deposit": 
        depo(parseInt(prompt("how much would you like to deposit. ")))
        break;
        
        case "withdraw":
            withDr(parseInt(prompt("how much would you like to withdraw. ")))   
        break;    
    }
    userInput2 = prompt("Would you like to return to the menu? 'Y' or 'N' ").toLowerCase();
}while(userInput2 != 'n')
console.log('Thankyou for choosing Z Bank');




    // if(userInput2 == "deposit"){
    //     depo(parseInt(prompt("how much would you like to deposit. ")))
    
    // }
    // else if(userInput2 == "withdraw"){
    //     withDr(paseInt(prompt("How much would you like to withdraw. ")))

    // }               
    // else if(userInput2 == 3){  //must create means to exit

    // }













// atm.depo(100)



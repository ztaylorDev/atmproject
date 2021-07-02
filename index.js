const { bal } = require('./account')
const { getBal, withDr, depo } = require('./atm')
const atm = require('./atm')
const prompt = require('prompt-sync')()


let userInput = prompt("Would you like to see your funds? yes or no. ")
    if(userInput == "yes"){
        getBal()
    }



let userInput2 = prompt("Would you like to deposit, withdraw, or exit. ")
    if(userInput2 == "deposit"){
        depo(prompt("how much would you like to deposit. "))
    
    }
    // else if(userInput2 == "withdraw"){
    //     withDr()
    // }
    // else if(userInput2 == 3){  must create means to exit

    // }















// atm.depo(100)



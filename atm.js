import account from "./account.js";

let balance = 5000.0;


function getBalance(){
    alert("You have a remaining balance of: "+balance)
}




function withdrawMoney(amount){
    if (amount %5 != 0){
        alert('Please only enter multiples of 5');
        return false;
    }
    else if (amount >= balance){
        alert('You have Insufficient');
        return false;
    } 
    
    balance = balance - amount -0.50;
    alert("Your funds have successfully been transfered. \n Your new balance is "+balance)

}  
    



function depostie(){


}

function validatePin(){


}
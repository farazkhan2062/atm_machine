import inquirer from "inquirer";
let myBalance = 3000;
let myPin = 1234;
let myPinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please Enter your pin",
    }
]);
if (myPinAns.pin === myPin) {
    console.log("Welcome to ATM!!! ");
    let myOption = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select your option",
            choices: ["Balance Inquiry", "Withdraw", "Fast Cash"],
        }
    ]);
    if (myOption.operation === "Withdraw") {
        let myAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please type your amount",
            }
        ]);
        if (myAmount.amount <= myBalance) {
            console.log("Please take your cash");
            myBalance -= myAmount.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
        ;
    }
    if (myOption.operation === "Fast Cash") {
        let myAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Please type your amount",
                choices: ["500", "1000", "2000", "5000"],
            }
        ]);
        if (myAmount.amount <= myBalance) {
            console.log("Please take your cash");
            myBalance -= myAmount.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
        ;
    }
    if (myOption.operation === "Balance Inquiry") {
        console.log("your Balance is " + myBalance);
    }
    ;
}
else {
    console.log("Please Enter correct pin !!!");
}
;
// 
//     let myOption = await inquirer.prompt
//     (
//         [
//             {
//                 name : "operation",
//                 type : "list",
//                 message : "Please select your option",
//                 choices : ["Balance Inquiry","Fast Cash","Withdraw"],
//             }
//         ]
//     )
// 
// if (myAmount.amount <= myBalance) {console.log("Please take your cash");}
// }                   
// else {console.log("Insufficient Balance");}
// if(myOption.operation === "Fast cash"){
//                 let fastCash = await inquirer.prompt
//                 (
//                     [
//                         {
//                             name : "option",
//                             type : "list",
//                             message : "Please select your option",
//                             choices : ["500","1000","2000","5000"],
//                         }
//                     ]
//                 )
// if(fastCash.option <= myBalance){console.log("Please take your cash");}        
//     else {console.log("Insufficient Balance")};
// };                      
//                   let checkBalance = await inquirer.prompt(
//                     [
//                         {
//                             name : "balance",
//                             type : "number",
//                             message : "Please type your pin",
//                         }
//                     ]
//                   )
// if(checkBalance.balance === "Balance Inquiry"){console.log( "your Balance is " + myBalance);}
// }
// 

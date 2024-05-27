#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance : number = 10000
let myPin   :   number  = 1234

let myPinAns = await inquirer.prompt
(
    [
        {
            name : "pin",
            type : "number",
            message : chalk.yellow("\nPlease Enter your pin"),
        }
    ]
);

if(myPinAns.pin === myPin){
    console.log(chalk.magenta.bold.italic("\n**** Welcome to ATM ****"));

let myOption = await inquirer.prompt
    (
        
        [
            {
                name : "operation",
                type : "list",
                message : chalk.yellow("\nPlease select your option"),
                choices : ["Balance Inquiry","Withdraw", "Fast Cash"],
            }
        ]          
    );

if(myOption.operation === "Withdraw"){
let myAmount = await inquirer.prompt
    (
        [
            {
                name : "amount",
                type : "number",
                message : chalk.yellow("\nPlease type your amount"),
            }
        ]
    );
        if(myAmount.amount <= myBalance){
        console.log(chalk.green("\nPlease take your cash"));

        myBalance -= myAmount.amount;
        console.log(chalk.blue(`\nyour remaining balance is ${chalk.yellow(myBalance)}`))
    }
        else {console.log(chalk.red.bold("\nInsufficient Balance"))};

    }

        
if(myOption.operation === "Fast Cash"){
let myAmount = await inquirer.prompt
    (
        [
            {
                name : "amount",
                type : "list",
                message : chalk.yellow("\nPlease type your amount"),
                choices : ["500","1000","2000","5000"],
            }
        ]
    );
                if(myAmount.amount <= myBalance){
                console.log(chalk.green("\nPlease take your cash"));

                myBalance -= myAmount.amount;
                console.log(chalk.blue(`\nyour remaining balance is ${chalk.yellow(myBalance)}`));
            }
                
                else {console.log(chalk.red.bold("\nInsufficient Balance"))};
                        
            }
if (myOption.operation === "Balance Inquiry"){
console.log(chalk.magenta.bold("\nyour Balance is " + myBalance));
            };              

}
else {console.log(chalk.red.bold.italic("\nPlease Enter correct pin !!!")) };





















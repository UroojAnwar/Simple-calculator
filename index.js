#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "Num1" },
    { message: "Enter second number", type: "number", name: "Num2" },
    {
        message: "Select operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.Num1 + answer.Num2);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Num1 - answer.Num2);
}
else if (answer.operator === "Division") {
    console.log(answer.Num1 / answer.Num2);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Num1 * answer.Num2);
}
else {
    console.log("Please select a valid operator");
}

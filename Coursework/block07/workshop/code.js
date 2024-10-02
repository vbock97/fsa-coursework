/**
 * 1. Declare a string variable and assign it to the value 
 * "You have received this message because you have been chosen to open an important vault"
 * 2. Declasre and assign 3 variables, one for each number in the commbination
 * 3. Code1 will be using multiplication
 * 4. Code2 will be using subtraction
 * 5. Code3 will be using addition
 * 6. Display a string and the codes to the user
 */


const userMessage = "You have received this message because you have been chosen to open an important vault"
//this message is the message we want to appear to the user

let code1 = 5 * 2
//should equal first number in combination
let code2 = 100 - 60
//should equal second number in combination
let code3 = 15 + 24
//should equal third number in combination

alert(userMessage + "\n" + code1 + "-" + code2 + "-" + code3)
// this should display a popup alert to user of the message and the code combination on the next line
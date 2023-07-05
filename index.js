
//convart Fahrenheit to celsius stars

// var fah = parseFloat(prompt("Enter Fahrenheit :"));
// var cel = (5/9) * (fah-32);
// document.write("celsios = " + cel.toFixed(3)); 
//convart Fahrenheit to celsius ends

// convert celsius to fahrenheit  strats
// var cel = parseFloat(prompt("Enter Celsius :"));
// var fah =(cel * (9/5)) + 32 ;
// document.write("Fahrenheit = " + fah.toFixed(3)); 
// convert celsius to fahrenheit  ends

//problem-1 starts
// var fruits = ["Apple", " Banana", "  Orange"];
// console.log("index of Banana : " + fruits.indexOf("Banana"));
// console.log("Original array : " + fruits);
// fruits[1] = " Mango";
// console.log("Replace Banana with Mango : " + fruits);
// fruits.pop();
// fruits.push(" Waterlemon");
// console.log("Remove orange & add watelemon : " + fruits);
//probem-1 ends


//probem-1 strats lagerst number find out
// var numbers = [13, 79, 45];

// if(numbers[0] > numbers[1]){
//     console.log(numbers[0] + " The lagerst number");
// }
// else if (numbers[1] > numbers[2]){
//     console.log(numbers[1] + " The lagerst number");
// }
// else{
//     console.log(numbers[2] + " The lagerst nmbers");
// }
//probem-1 ends

//Task letter grade with user input starts
// var marks = parseFloat(prompt("Enter your mark : "));

// if(marks>100 || marks<=0){
//     document.write("Invaild number")
// }
// else if(marks>=80 && marks<=100){
//     document.write("your letter grade A+");
// }
// else if(marks>=70 && marks<=79){
//     document.write("your letter grade A");
// }
// else if(marks>=60 && marks<=69){
//     document.write("your letter grade A-");
// }
// else if(marks>=50 && marks<=59){
//     document.write("your letter grade B");
// }
// else if(marks>=40 && marks<=49){
//     document.write("your letter grade C");
// }
// else if(marks>=33 && marks<=39){
//     document.write("your letter grade D");
// }
// else{
//     document.write("you are fail");
// }
//Task letter grade with user input ends 

//digit  spelling strats
//0-zero ...........9-nine, 10-not a valid digit
//use keyworrd switch, case, break, default

// var digit = prompt("Enter any digit : ");

// switch(digit){
//     case "0":
//         document.write("Zero");
//         break;
        
//         case "1":
//         document.write("One");
//         break;

//         case "2":
//         document.write("Two");
//         break;

//         case "3":
//         document.write("Three");
//         break;

//         case "4":
//         document.write("Four");
//         break;

//         case "6":
//         document.write("Six");
//         break;

//         case "7":
//         document.write("Seven");
//         break;

//         case "8":
//         document.write("Eight");
//         break;

//         case "9":
//         document.write("Nine");
//         break;
        

//         default:
//             document.write("Not a valid digit")


// }
//digit  spelling ends

// Task 5(Anisul Islam) input a letter and check it is vowel & consonant using switch 
var letter = prompt("Enter any letter : ");
    letter = letter.toLowerCase();

switch(letter){
    case "a":
        document.write("Vowel");
        break;
        
        case "e":
        document.write("Vowel");
        break;

        case "i":
        document.write("Vowel");
        break;

        case "o":
        document.write("Vowel");
        break;

        case "u":
        document.write("Vowel");
        break;

        default:
            document.write("Consonant");
}
//Task 5(Anisul Islam) ends
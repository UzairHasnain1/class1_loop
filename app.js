// alert("Javascript 01")



// document.write("Name :  Muhammad Uzair Hasnain <br/>"); 
// document.write("DOB : 4 December 2001 <br/>"); 
// document.write("Mobile no : 03303762274"); 







// var num1 = parseInt(prompt("Please enter your first number"));
// var num2 = parseInt(prompt("Please enter your Second number"));

// var result = num1 + num2;
// document.write("first number is : " + num1 + "<br/>");
// document.write("second number is : " + num2 + "<br/>");
// document.write('The sum of two number is : ' + result + "<br/>");










// var num1 = parseInt(prompt("Please enter your first number"));
// var num2 = parseInt(prompt("Please enter your second number"));
// var num3 = parseInt(prompt("Please enter your third number"));

// if (num1 > num2 && num1 > num3) {
//     document.write(num1 + "is the greatest number");
// }
// else if (num2 > num1 && num2 > num3) {
//     document.write(num2 + "is the greatest number");
// }
// else if (num3 > num1 && num3 > num1){
//     document.write(num3 + "is the greatest number");
// }
// else{
//     document.write("All are equal");
// }











// var num1 = parseInt(prompt("Please enter the number"));
// if(num1 > 0) {
//     document.write(num1 + " is a positive number");
// }
// else if (num1 < 0) {
//     document.write(num1 + " is a negative number");
// }
// else if (num1 == 0) {
//     document.write(num1 + " is equal to zero")
// }









// var num1 = parseInt(prompt("Please enter the number"));
// if (num1 % 2 == 0) {
//     document.write(num1 + "is a even number");
// }
// else {
//     document.write(num1 + "is a odd number");
// }







// var year = parseInt(prompt("Please enter the year"));
// if (year % 4 == 0) {
//     document.write("the year" + year + "is a leap year");
// }
// else {
//     document.write("It is not a leap year");
// }








// var vowel = prompt("Enter a alphabet :")
// if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u' || vowel == 'A' || vowel == 'E' ||
// vowel == 'i' || vowel == 'o' || vowel == 'u'){
//    console.log(vowel + "is a vowel");
// }
// else{
//     console.log("It is a consonant");
// }








// var day = parseInt(prompt("Enter day number : "));
// switch (day){
// case 1:
// console.log("Saturday");
// break;
// case 2:
// console.log("Sunday");
// break;
// case 3:
// console.log("Monday");
// break;
// case 4:
// console.log("Tuesday");
// break;
// case 5:
// console.log("Wednesday");
// break;
// case 6:
// console.log("Thursday");
// break;
// case 7:
// console.log("Friday");
// break;
// default:
//     console.log("Invalid Input");
//     break;
// }










// var vowel = prompt("Enter a Alphabet");
// switch (vowel) {
//   case 'a':
//     console.log("a is vowel");
//     break;
//   case 'e':
//     console.log("e is vowel");
//     break;
//   case 'i':
//     console.log("i is vowel");
//     break;
//   case 'o':
//     console.log("o is vowel");
//     break;
//   case 'u':  
//     console.log("u is vowel");
//     break;
//   default:
//     console.log("It is a consonant");
//     break;
// }









var cal = parseInt(prompt("Enter a Number : \n1: Addition \n2: Subtraction \n3: Multiplication \n4: Division"));

var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
console.log("Your first number is :" + num1 + "<br/>"); 
console.log("Your second number is :" + num2 + "<br/>");
switch (cal) {
        case 1:
        var add = num1 + num2;
        console.log("Addition of two number is: " + add);
        break;
        case 2:
        var add = num1 - num2;
        console.log("Subtraction of two number is: " + add);
        break;
        case 3:
        var add = num1 * num2;
        console.log("Multiplication of two number is: " + add);
        break;
        case 4:
        var add = num1 / num2;
        console.log("Division of two number is: " + add);
        break;
        default:
            console.log("Your function can not be performed");
        break;
} 
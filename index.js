// Question 1

var arr = [[1,2,3],[4,5,6],7,8,9,[[10,11,12,[13,4,112]],136,14],];

var num1 = arr[5][0][0];
var num2 = arr[3];
var num3 = arr[5][0][3][0];
var num4 = arr[5][1];
var num5 = arr[5][0][3][1];

console.log(num1, num2, num3, num4, num5);

// Question 2

var sentence = ["javascript", "web", "capacityBay"];

Word = 'I am a ' + sentence[1] + " developer at " + sentence[2] + " i love " + sentence[0]

alert(Word)

// Question 3

let str = "Generalization"

let fourthtotheLast = str.slice(3, str.length - 1)

alert(fourthtotheLast)

// Question 4
var originalArray = ["orange", "apple", "guava", "lemon"];

var beginningArray = ["pea", "banana"];
var endArray = ["avocado", "mango"];
var finalArray = beginningArray.concat(originalArray, endArray);
console.log(finalArray)


                    // Section 2

// Question 5
// var ar = [];

// function writeNum(){
//     arr.push(arr.length + 1);
//     console.log(arr)
// }
// writeNum();
// writeNum();
// writeNum();
// writeNum();

// Question 6
// arr = [];
// function writeNum(){
//     var num = arr.length + 1;
//     if (num % 3 === 0){
//         arr.push("fizz");
//     } else{
//         arr.push(num)
//     }
//     console.log(arr)
// }

// writeNum();
// writeNum();
// writeNum();
// writeNum();

// Question 6
// var arr = [];

// function writeNum(){
//     var num = arr.length + 1;
//     if (num % 3 === 0 && num % 5 === 0){
//         arr.push("fizzBuzz");
//     } else if (num % 3 === 0){
//         arr.push("fizz");
//     } else if (num % 5 === 0){
//         arr.push("Buzz");
//     } else {
//         arr.push(num);
//     }
//     console.log(arr)
// }

// writeNum();
// writeNum();
// writeNum();
// writeNum();
// writeNum();

// Question 7

var arr = [];
var count = 1;

function writeNum(){
    if(count % 3 === 0 && count % 5 === 0){
        arr.push("fizzBuzz");
    }else if(count % 3 === 0){
        arr.push("Fizz");
    }else if(count % 5 === 0){
        arr.push("Buzz");
    }else {
        arr.push(count);
    }
    count++;
    console.log(arr);
}

writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();
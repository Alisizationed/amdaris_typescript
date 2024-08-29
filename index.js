"use strict";
/*Declaration and printing of the values and types of different variables*/
let someString = "Some String";
console.log(someString);
console.log(typeof someString);
let someNumber = 0;
console.log(someNumber);
console.log(typeof someNumber);
let someBool = true;
console.log(someBool);
console.log(typeof someBool);
var dayOfTheWeek;
(function (dayOfTheWeek) {
    dayOfTheWeek[dayOfTheWeek["Monday"] = 1] = "Monday";
    dayOfTheWeek[dayOfTheWeek["Tuesday"] = 2] = "Tuesday";
    dayOfTheWeek[dayOfTheWeek["Wednesday"] = 3] = "Wednesday";
    dayOfTheWeek[dayOfTheWeek["Thursday"] = 4] = "Thursday";
    dayOfTheWeek[dayOfTheWeek["Friday"] = 5] = "Friday";
    dayOfTheWeek[dayOfTheWeek["Saturday"] = 6] = "Saturday";
    dayOfTheWeek[dayOfTheWeek["Sunday"] = 7] = "Sunday";
})(dayOfTheWeek || (dayOfTheWeek = {}));
;
console.log(dayOfTheWeek.Sunday);
console.log(typeof dayOfTheWeek.Sunday);
let someArrayOfStrings = ["Some String 1",
    "Some String 2",
    "Some String 3",
    "Some String 4",
    "Some String 5",
    "Some String 6"
];
console.log(someArrayOfStrings);
console.log(typeof someArrayOfStrings);
console.log(someArrayOfStrings[0]);
console.log(typeof someArrayOfStrings[0]);
/*Declaration of PI, radius and circumference(calculated) and printing*/
const M_PI = 3.14159265359;
const radiusCircle = 10;
const circumferenceCircle = 2 * M_PI * radiusCircle;
console.log("2 * " + M_PI + " * " + radiusCircle + " = " + circumferenceCircle);
/*Array of favourite food and looping through it*/
console.log('\n' + "My favourite foods are:");
const favouriteFoods = [
    "Cake",
    "Pie",
    "Cookie",
    "Pancake",
    "Flat peach",
    "Pear"
];
favouriteFoods.forEach((food) => { console.log("- " + food); });
/*Or*/
console.log('\n' + "My favourite foods are:");
for (let i = 0; i < favouriteFoods.length; i++)
    console.log(i + 1 + ' ' + favouriteFoods[i]);
/*Judging if a person is an adult, a teenager or a child by their age*/
console.log('\n');
const personAge = 18;
if (personAge >= 18)
    console.log("You are an adult");
else if (personAge >= 11)
    console.log("You are a teenager");
else
    console.log("You are a child");
/*Declaration of a var of any type and printing its length*/
let anyVar = "2006";
console.log('\n' + "The length of " + anyVar + ": " + anyVar.length);
/*Declaration of an array of mixed data types and printing the sum of its elements*/
let mixedArray = [
    "2315",
    1000,
    "394",
    "47",
    754,
    "350",
    24,
    "5205",
    895,
    "452",
    51
];
let sum = 0;
console.log("\nArray of mixed elements:");
for (let i = 0; i < mixedArray.length; i++) {
    console.log("- " + mixedArray[i] + " " + typeof mixedArray[i]);
    sum += +mixedArray[i];
}
;
console.log("\nThe sum is: " + sum);

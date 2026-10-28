/*let js = 'amasing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);
r
let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name convention
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/

// Data Types
/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof true);
console.log(typeof 22);
console.log(typeof 'Jonas');

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let music;
console.log(music);

music = "Afro Pop";
console.log(music);
*/

/*let age = 30;
age = 0;

const birthYear = 1991;
*/

// Maths Operators
/*const now = 2026;
const ageLeo = now - 2003;
const ageSarah = now - 2007;
console.log(ageLeo, ageSarah);

console.log(ageLeo * 2, ageLeo / 10, 2 ** 3);

const firstName = "Jonas";
const secondName = "Schmedtmann";
console.log(firstName + ' ' + secondName);

// Assignment Operators
let x = 10 + 6;
x += 10; // x = x + 10 = 26
x *= 4; // x = x * 4 = 104
x++;
x--;
console.log(x);

// Comparison operator
console.log(ageLeo > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 2003 > now - 2007);
*/

/*const now = 2026;
const ageLeo = now - 2003;
const ageSarah = now - 2007;
// console.log(ageLeo, ageSarah);

console.log(now - 2003 > now - 2007);

let x, y;
x = y = 26 - 10 - 6; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageLeo + ageSarah) / 2;
console.log(ageLeo, ageSarah, averageAge);
*/

// Coding challenge #1

/*const markWeight = 95;
const markHeight = 1.88
const markBMI = markWeight / markHeight ** 2;

const johnWeight = 85;
const johnHeight = 1.76;
const johnBMI = johnWeight / johnHeight ** 2;

const markHeigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHeigherBMI);
*/

/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2026;

const Jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(Jonas);
*/

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`string
// multiple
// lines`);


/*const age = 19;

if (age >= 18) {
    console.log(`Sarah is old enough to drive!`);
} else {
    console.log(`Sarah isn't old enough to drive!`);
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Coding challenge #2
/*const markWeight = 95;
const markHeight = 1.88
const markBMI = markWeight / markHeight ** 2;

const johnWeight = 85;
const johnHeight = 1.76;
const johnBMI = johnWeight / johnHeight ** 2;


if (markBMI >= johnBMI) {
    console.log(`Mark's BMI (${markBMI}
     ) is higher than John's!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's!`);
}
*/

// type conversion
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(12));

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23 ' - '10 ' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}


let height = 0;
if (height) {
    console.log('YAY! height is defined');
} else {
    console.log('Height is UNDEFINED')
}*/

/*const age = 18;
if (age === 18) console.log('You just became an adult D: (strict)');
if (age == 18) console.log('You just became an adult D:(loose)'); //Pretend this doesn't exist

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');
*/

// Boolean Logic
/*const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense || hasGoodVision) {
//     console.log('Sarah can drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah can drive!');
} else {
    console.log('Someone else should drive...');
}*/

/*const countryLanguage = 'English';
const countryPopulation = 50;
const landMark = 'Not an island';

if (countryLanguage && !countryPopulation && landMark) {
    console.log('You should live in Nigeria');
} else {
    console.log('Nigeria does not meet your critetria, perherps you should check another country...maybe London!');
}*/

// Coding challenge #3 
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const Dolphines = 97.666666667;
// const koala = 96.333333333;

// const dolphinScore = (96 + 108 + 89) / 3;
// const koalaScore = (88 + 100 + 110) / 3;

// if (dolphinScore > koalaScore) {
//     console.log('The dolphines are the winner');
// } else if (koalaScore > dolphinScore) {
//     console.log('The koalas are the winner');
// } else if (dolphinScore === koalaScore) {
//     console.log("It's a tie, no team wins the Trophy!");
// }
// console.log(dolphinScore, koalaScore);

// Bonus 1
/*const dolphinScore = (97 + 112 + 101) / 3;
const koalaScore = (109 + 95 + 123) / 3;
console.log(dolphinScore, koalaScore);

if (dolphinScore > koalaScore && dolphinScore >= 100) {
    console.log('The Dolphins are the winner!');
} else if (dolphinScore < koalaScore && koalaScore >= 100) {
    console.log('The Koalas are the winner!');
} else if (dolphinScore === koalaScore) {
    console.log("It's a tie, no team won the trophy!");
}*/

// Bonus 2
/*const dolphinScore = (97 + 112 + 80) / 3;
const koalaScore = (109 + 95 + 50) / 3;
console.log(dolphinScore, koalaScore);

if (dolphinScore > koalaScore && dolphinScore >= 100) {
    console.log('The Dolphins are the winner!');
} else if (dolphinScore < koalaScore && koalaScore >= 100) {
    console.log('The Koalas are the winner!');
} else if (dolphinScore === koalaScore && dolphinScore === koalaScore) {
    console.log("It's a tie, both teams win the trophy!");
} else {
    console.log('No team won the trophy!');
}*/

// The Switch Statement 
/*const day = 'Friday';

switch (day) {
    case 'Monday':
        console.log('Plan course tutorial!');
        console.log('Go for coding meetup!');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
    case 'Saturday':
        console.log('Enjoying the weekend');
        break;
    default:
        console.log('Not a valid day');
}

// Challange Using The Regular "If Else block"
const days = 'Friday';

if (day === 'Monday') {
    console.log('Plan course tutoral!');
    console.log('Go for coding meetup!');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code samples')
} else if (day === 'Friday' || day === 'Saturday') {
    console.log('Enjoy the weekend')
} else {
    console.log('Not a valid day!');
}*/

// The Conditional (Tenary) Operator 
/*const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log(drink2);
console.log(`I love to drink ${age >= 18 ? 'Wine' : 'Water'}`);
*/

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant.In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value.Create a variable called 'tip' for this.It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
    2. Print a string to the console containing the bill value, the tip, and the final value(bill + tip).Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*const billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);
*/

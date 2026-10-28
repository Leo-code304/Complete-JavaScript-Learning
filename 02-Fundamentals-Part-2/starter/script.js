'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 343; */

// Functions 
/*function logger() {
    console.log('My name is leonard');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(4, 8);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(12, 9);
console.log(appleOrangeJuice);
*/

////////////////////////////////////////
// Function declaration 
/*function calcAge1(birthyear) {
    return 2026 - birthyear;
}

const currentAge = calcAge1(2003);
console.log(currentAge);

// Function Expression
const calcAge2 = function (birthyear) {
    return 2026 - birthyear;
}

const newAge = calcAge2(2004);
console.log(newAge);
*/

//////////////////////////////////////////
// Arrow function 
//// Writing a single block of code 
/*const calcAge3 = birthyear => 2026 - birthyear;
const newAge1 = calcAge3(2005);
console.log(newAge1);

//// Writing multiple blocks of code
const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2026 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Mr White'));
console.log(yearsUntilRetirement(1998, 'Patrick'));
*/

/////////////////////////////////////////
// Functions calling other functions 
/*function cutFruitPieces(fruit) {
    return fruit * 4;
}


const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*const calcAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}
console.log(yearsUntilRetirement(1991, 'Mr White'));
console.log(yearsUntilRetirement(1970, 'Mr White'));
*/

//////////////////////////////////////////////////////////
// Coding challenge #1 
/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team.Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B.Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// Test data 1 
/*const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`The Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

const finalResult = checkWinner(scoreDolphins, scoreKoalas);

// Test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

// Assignment on functions
// Assignment 1 
/*const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and it's
capital city is ${capitalCity}.`;
};

const country1 = describeCountry('Nigeria', 7, 'Abuja');
console.log(country1);
const country2 = describeCountry('SwitzerLand', 6, 'Bern');
console.log(country2);
const country3 = describeCountry('UK', 6, 'London');
console.log(country3);

// Assignment 2
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percentage1 = percentageOfWorld1(10);
const percentage2 = percentageOfWorld1(16);
const percentage3 = percentageOfWorld1(20);
console.log(percentage1, percentage2, percentage3);

// Assignment 3
const percentageOfWorld3 = population => (population / 7900) * 100;
const newPercent = percentageOfWorld3(9);
const newPercent1 = percentageOfWorld3(12);
const newPercent2 = percentageOfWorld3(4);
console.log(newPercent, newPercent1, newPercent2);

// Assignment 4
const describePopulation = function (country, population) {
    const calcPercent1 = percentageOfWorld1(population);

    return `${country} has ${population} million people,
which is about 18.2% of the world.'`;
};

const maximumPopulation = describePopulation('Australia', 19);
console.log(maximumPopulation);
*/

// Introduction to Arrays 
/*const friends = ['Michael', 'Stephen', 'Peter', 'James'];
console.log(friends);

const year = new Array(1991, 1984, 2000, 2020);
console.log(year);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //It's not zero based.
console.log(friends[friends.length - 1]); // To retrieve the last value in an array...

friends[2] = 'Jake';// This was done to reassign a value in an array.
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2026 - 1991, 'Teacher', friends];
console.log(jonas);

//Exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

// Basic array Operations (Methods) 
/*const friends = ['Michael', 'Stephen', 'Peter', 'James'];

//This method adds element to an array.
const newlength = friends.push('John');
console.log(friends);
console.log(newlength);


friends.unshift('Kobe');
console.log(friends);

// Removes elements
friends.pop()
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Stephen'));
console.log(friends.includes('Tinkerbell'));
console.log(friends.includes(23));

if (friends.includes('Stephen')) {
    console.log('You have a friend called Stephen...');
}*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


/*const calcTips = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips([bills[bills.length - 1]])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);*/

// Introduction to Objects

/*const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};*/

// Dot vs. Bracket Notation

/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
};

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Chanllenge
// what i need to get from the objects are Jonas, 3, and then michael.

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);
*/

// Object Methods 

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function () {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};


console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

// Coding Challeng #3 

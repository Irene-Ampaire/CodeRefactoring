/**
 * This lab consists of 5 questions that total up to 20 marks. 
 * You are to follow the instructions and prove that your solution works at the end of each question. 
 * You may include comments where necessary.
 */

// Importing readline for user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to get user input
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

/**
 * Question 1: Below is a snippet of code that prints out numbers from 0-9. 
 * Make the necessary corrections to the source code so that it may print each number 0-9 individually. (2 Marks)
 */
function question1() {
    console.log('\n*** Question 1 ***');

    for (let i = 0; i < 10; i++) console.log(i);
}

/**
 * Question2: The funciton below reads names from a Python list and then prints them out in a statement. 
 * Complete the function. (3 Marks)
 */
function question2() {
    console.log('\n*** Question 2 ***');

    const names = ['Declan', 'Trevor', 'James', 'William', 'Peter', 'Malcom', 'Henry'];
    for (let i = 0; i < names.length; i++) {
        console.log(`The name to be displayed is: ${names[i]}`);

    }
}   

/**
 * Question 3: I have defined three Python lists with words in each of them. Create a funciton that uses one word 
 * from each list to create a logically sound and grammatically correct sentence. 
 * Each word from either list may only be used once - once a word is used in a sentence it cannot be used in 
 * another sentence. Print out your result. (5 Marks)
 */
const colours = ['red', 'blue', 'green'];
const vehicles = ['car', 'bicycle', 'tractor'];
const adjectives = ['fast', 'slow', 'cool'];

function question3() {
    console.log('\n*** Question 3 ***'); 

    // Randomly select one word from each list
    const selectedColour = colours[Math.floor(Math.random() * colours.length)];
    const selectedVehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
    const selectedAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    // Create a sentence using the selected words
    const sentence = `The ${selectedColour} ${selectedVehicle} is ${selectedAdjective}.`;

    // Print the result
    console.log(sentence);
}

/** 
 * 
 * Question 4: Create a function that accepts a list of salaries and calculates the taxes and net pay associated 
 * with that salary. The tax rates are defined as follows: a person earning 600,000 or more pays 43% tax, 
 * a person earning 400,000 or more but less than 600,000 pays 33% tax, a person earning 200,000 or more but less 
 * than 400,000 pays 23% tax and someone earning less than 200,000 pays 13% tax. Net Pay is equal to gross pay 
 * minus tax. The function should print a statement that describes how much tax and what the net pay is for each 
 * salary in the list. (5 marks)
 */
function question4() {
    console.log('\n*** Question 4 ***');
    
    salaries.forEach(salary => {
        let taxRate;
        
        // Determine the tax rate based on the salary
        if (salary >= 600000) {
            taxRate = 0.43;
        } else if (salary >= 400000) {
            taxRate = 0.33;
        } else if (salary >= 200000) {
            taxRate = 0.23;
        } else {
            taxRate = 0.13;
        }

        // Calculate tax and net pay
        const tax = salary * taxRate;
        const netPay = salary - tax;

        // Print the results
        console.log(`For a salary of ${salary}, the tax is ${tax.toFixed(2)} and the net pay is ${netPay.toFixed(2)}.`);
    });
}

// Example usage
const salaries = [150000, 250000, 450000, 650000];
question4(salaries);


/**
 * Question 5: Write a function that determines the Grade of a student. The grade are distinguished as follows: 
 * A student is graded A for scoring 90 or more marks, graded B for scoring 80 or more but less than 90, 
 * graded C for scoring 70 or more but less than 80, graded D for scoring 60 or more but less than 70 
 * and is graded F for scoring less than 60. The function should take the score as a parameter. The student's 
 * score must be user input. Print out your result. (5 Marks)
 */
async function question5() {
    console.log('\n*** Question 5 ***');
    // Get user input for the score
    const input = await askQuestion("Please enter the student's score: ");
    const score = parseFloat(input);

    // Determine the grade based on the score
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Print the result
    console.log(`The student's score is ${score} and the grade is ${grade}.`);

}

// Main function to run all questions
async function main() {
    console.log('Lab 3 - JavaScript Version\n');
    
    question1();
    question2();
    question3();
    question4();
    await question5();
    
    rl.close();
}

// Run the program
main();
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
 * Question 1: Below is a snippet of code that accept's a user's name as input and displays the name within 
 * a message from the computer terminal. 
 * Complete the code snippet so that the name is shown in the message. (2 Marks)
*/
async function question1() {
    console.log('\n*** Question 1 ***');

    const name = await askQuestion('Please enter your name: ');
    const statement = `Hello, ${name}!`; // Use template literals to create a statement
    console.log(statement);
}

/**
 * Question 2: The funciton below takes in input of length and width from a user to calculate the area of 
 * the rectangle. Complete the function and print out the result. (3 Marks)
*/
async function question2() {
    console.log('\n*** Question 2 ***');

    const length = 4
    const width = 3
    const area = length * width;
    console.log(`The area of the object is ${area} square units.`);
}

/**
 * Question 3: Write me a funciton that calculates the area of a rectangle and invoke 2 instances of rectangles 
 * with Rectangle 1 having the dimensions (Length = 13, Width = 17) and Rectangle 2 having the dimensions 
 * (Length = 25, Width = 19). Make sure that the only accepts positive integers. (5 Marks)
*/
async function question3() {
    console.log('\n*** Question 3 ***');



function calculateRectangleArea(length, width) {
    // Check if the inputs are positive integers
    if (!Number.isInteger(length) || length <= 0 || !Number.isInteger(width) || width <= 0) {
        throw new Error('Length and width must be positive integers.');
    }
    
    // Calculate the area
    return length * width;
}

// Rectangle 1 dimensions
const length1 = 13;
const width1 = 17;

// Rectangle 2 dimensions
const length2 = 25;
const width2 = 19;

try {
    const area1 = calculateRectangleArea(length1, width1);
    console.log(`Area of Rectangle 1 (Length: ${length1}, Width: ${width1}) = ${area1}`);

    const area2 = calculateRectangleArea(length2, width2);
    console.log(`Area of Rectangle 2 (Length: ${length2}, Width: ${width2}) = ${area2}`);
} catch (error) {
    console.error(error.message);
}

}
/**
 * Question 4: Using the formula (0.5 * base * height) create a function that calculates the area of a triangle. 
 * Calculate the area of the two triangles Traingle 1 (base = 5, height = 9) and Triangle 2 (base = 11, height = 15) 
 * and find out which triangle covers more area than the other. (5 marks)
 */

async function question4() {
    console.log('\n*** Question 4 ***');

    // Function to calculate the area of a triangle
    function calculateTriangleArea(base, height) {
        return 0.5 * base * height;
    }

    // Triangle 1
    const base1 = 5;
    const height1 = 9;
    const area1 = calculateTriangleArea(base1, height1);

    // Triangle 2
    const base2 = 11;
    const height2 = 15;
    const area2 = calculateTriangleArea(base2, height2);

    // Output the areas
    console.log(`Area of Triangle 1: ${area1}`);
    console.log(`Area of Triangle 2: ${area2}`);

    // Compare the areas
    if (area1 > area2) {
        console.log("Triangle 1 covers more area than Triangle 2.");
    } else if (area1 < area2) {
        console.log("Triangle 2 covers more area than Triangle 1.");
    } else {
        console.log("Both triangles cover the same area.");
    }
}




/**
 * Question 5: There are two circles Circle 1 (radius = 8) and Circle 2 (radius = 13) with a relationship such 
 * that Circle 1 is inside Circle 2. Using the formula for area of a cirlce (pi * (radius ** 2)), 
 * calculate how much area in percentage Circle 1 takes up inside Circle 2. (5 Marks)
 */


async function question5() {
    console.log('\n*** Question 5 ***');

    // Function to calculate the area of a circle
    function calculateCircleArea(radius) {
        return Math.PI * (radius ** 2);
    }

    // Circle 1
    const radius1 = 8;
    const area1 = calculateCircleArea(radius1);

    // Circle 2
    const radius2 = 13;
    const area2 = calculateCircleArea(radius2);

    // Calculate the percentage of area Circle 1 takes up inside Circle 2
    const percentage = (area1 / area2) * 100;

    // Output the areas and the percentage
    console.log(`Area of Circle 1: ${area1.toFixed(2)}`);
    console.log(`Area of Circle 2: ${area2.toFixed(2)}`);
    console.log(`Circle 1 takes up ${percentage.toFixed(2)}% of the area of Circle 2.`);
}



// Main function to run all questions
async function main() {
    console.log('Lab 1 - JavaScript Version\n');
    
    await question1();
    await question2();
    await question3();
    await question4();
    await question5();
    
    rl.close();
}

// Run the program
main();
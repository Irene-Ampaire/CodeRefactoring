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
 * Question 1: Below is a snippet of code that calculates the force obtained by an object. 
 * The variables "mass" and "acceleration" are user inputs. Complete the source code. (2 Marks)
 */
async function question1() {
    console.log('\n*** Question 1 ***');

    const mass = parseFloat(await askQuestion('Please Enter the mass of the object: '));
    const acceleration = parseFloat(await askQuestion('Please enter the acceleration of the object: '));
    const force = mass * acceleration;
    console.log(force);
}

/**
 * Quesrtion 2: The funciton below calculates the acceleration of an object. 
 * It takes in two recordings of the objects speed and the times at which they were taken. 
 * Acceleration is defined as the change in velocity divided by the change in time. 
 * Complete the function. (3 Marks)
 */
function acceleration(v1, v2, t1, t2) {
    const vChange = v2 - v1;
    const tChange = t2 - t1;
    return vChange / tChange;
}

function question2() {
    console.log('\n*** Question 2 ***');

    const v1 = 35.7;
    const v2 = 88;
    const t1 = 3;
    const t2 = 10;
    const answer = acceleration(v1, v2, t1, t2);
    console.log(`The object is accelerating at a rate of ${answer} mss.`);
}

/**
 * Question 3: Create a class that defines a sphere. 
 * The class should have a property that defines the radius of the sphere and an encapsulated function that 
 * calculates and returns the volume of a sphere (volume = 4/3 * pi * radius^3). 
 * The class should accept radius as a parameter. Print your result. (5 Marks)
 */
class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    #getVolume() {
        return (4/3) * Math.PI * Math.pow(this.radius, 3);
    }

    volume() {
        return this.#getVolume();
    }
}

async function question3() {
    console.log('\n*** Question 3 ***');

    const radius = parseFloat(await askQuestion('Enter the radius of the sphere: '));
    const sphere = new Sphere(radius);
    console.log(`A sphere of the radius ${radius} has a volume of: ${sphere.volume()}.`);
}

/**
 * Question 4: Create a class that defines a cylinder. The class should inherit from the class created in 
 * Question 3 above, have a property that defines length and an encapsulated function that calculates and 
 * returns the volume of a cylinder (volume = pi * radius^2 * length). 
 * The class should accept radius and length as parameters. Print your results. (5 marks)
 */
class Cylinder extends Sphere {
    constructor(radius, length) {
        super(radius);
        this.length = length;
    }

    #getVolume() {
        return Math.PI * Math.pow(this.radius, 2) * this.length;
    }

    volume() {
        return this.#getVolume();
    }
}

async function question4() {
    console.log('\n*** Question 4 ***');

    const radius = parseFloat(await askQuestion('Enter the radius of the cylinder: '));
    const length = parseInt(await askQuestion('Enter length of the cylinder: '));
    const cylinder = new Cylinder(radius, length);
    console.log(`The cylinder of radius ${radius} and length ${length} has a volume: ${cylinder.volume()}.`);
}

/**
 * Question 5: Create a function that uses the sphere as defined in Question 3 to determine how many spheres 
 * would fit inside a cylinder as defined in Question 4. The function should return the result as a whole number. 
 * Bear in mind the radius of the sphere cannot be greater than that of the cylinder. 
 * Print your result. (5 Marks)
 */
function getFit(radius1, radius2, length) {
    if (radius1 > radius2) {
        return 'The radius of the sphere cannot be greater than the radius of the cylinder.';
    }

    const sphere = new Sphere(radius1);
    const cylinder = new Cylinder(radius2, length);
    const sphereVolume = sphere.volume();
    const cylinderVolume = cylinder.volume();
    return Math.floor(cylinderVolume / sphereVolume);
}

async function question5() {
    console.log('\n*** Question 5 ***');
    
    const radius1 = parseFloat(await askQuestion('Enter the radius of the sphere: '));
    const radius2 = parseFloat(await askQuestion('Enter the radius of the cylinder: '));
    const length = parseFloat(await askQuestion('Enter the length of the cylinder: '));
    const sphereFit = getFit(radius1, radius2, length);
    console.log(`The number of spheres that fit inside the cylinder is: ${sphereFit}.`);
}

// Main function to run all questions
async function main() {
    console.log('Lab 2 - JavaScript Version\n');
    
    await question1();
    question2();
    await question3();
    await question4();
    await question5();
    
    rl.close();
}

// Run the program
main();

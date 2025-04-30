// This lab consists of 5 questions that total up to 20 marks. 
//  * You are to follow the instructions and prove that your solution works at the end of each question. 
//  * You may include comments where necessary.
//  */

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

    const mass = await askQuestion('Please Enter the mass of the object: ');
    const acceleration = await askQuestion('Please enter the acceleration of the object: ');
    const force = 
    console.log(force);
}



async function question1() {
    console.log('\n*** Question 1 ***');

    // Prompt user for mass and acceleration
    const mass = await askQuestion('Please Enter the mass of the object: ');
    const acceleration = await askQuestion('Please enter the acceleration of the object: ');

    // Calculate force
    const force = mass * acceleration;

    // Output the result
    console.log(`The force obtained by the object is: ${force}`);
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
    return vChange*tChange
}

function question2() {
    console.log('\n*** Question 2 ***');

    const v1 = 10
    const v2 = 20
    const t1 = 2
    const t2 = 5
    const answer = acceleration(v1, v2, t1, t2);
    console.log(`The object is accelerating at a rate of ${answer} mss.`);
}

/**
 * Question 3: Create a class that defines a sphere. 
 * The class should have a property that defines the radius of the sphere and an encapsulated function that 
 * calculates and returns the volume of a sphere (volume = 4/3 * pi * radius^3). 
 * The class should accept radius as a parameter. Print your result. (5 Marks)
 */
async function question3() {
    console.log('\n*** Question 3 ***');


class Sphere {
    constructor(radius) {
        this.radius = radius; // Property to define the radius of the sphere
    }

    // Method to calculate the volume of the sphere
    calculateVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
}

    // Create an instance of the Sphere class with a specific radius
    const radius = 5; // Example radius
    const sphere = new Sphere(radius);

    // Calculate and print the volume of the sphere
    const volume = sphere.calculateVolume();
    console.log(`The volume of the sphere with radius ${radius} is: ${volume.toFixed(2)} cubic units.`);
}



/**
 * Question 4: Create a class that defines a cylinder. The class should inherit from the class created in 
 * Question 3 above, have a property that defines length and an encapsulated function that calculates and 
 * returns the volume of a cylinder (volume = pi * radius^2 * length). 
 * The class should accept radius and length as parameters. Print your results. (5 marks)
 */
async function question4() {
    console.log('\n*** Question 4 ***');
    class Sphere {
        constructor(radius) {
            this.radius = radius; // Property to define the radius of the sphere
        }
    
        // Method to calculate the volume of the sphere
        calculateVolume() {
            return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
        }
    }
    
   
    class Cylinder extends Sphere {
        constructor(radius, length) {
            super(radius); // Call the constructor of the parent class (Sphere)
            this.length = length; // Property to define the length of the cylinder
        }
    
        // Method to calculate the volume of the cylinder
        calculateVolume() {
            return Math.PI * Math.pow(this.radius, 2) * this.length;
        }
    }
    
    
        // Create an instance of the Cylinder class with a specific radius and length
        const radius = 5; // Example radius
        const length = 10; // Example length
        const cylinder = new Cylinder(radius, length);
    
        // Calculate and print the volume of the cylinder
        const volume = cylinder.calculateVolume();
        console.log(`The volume of the cylinder with radius ${radius} and length ${length} is: ${volume.toFixed(2)} cubic units.`);
}
    


/**
 * Question 5: Create a function that uses the sphere as defined in Question 3 to determine how many spheres 
 * would fit inside a cylinder as defined in Question 4. The function should return the result as a whole number. 
 * Bear in mind the radius of the sphere cannot be greater than that of the cylinder. 
 * Print your result. (5 Marks)
 */
async function question5() {
    console.log('\n*** Question 5 ***');

class Sphere {
    constructor(radius) {
        this.radius = radius; // Property to define the radius of the sphere
    }

    // Method to calculate the volume of the sphere
    calculateVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
}

class Cylinder extends Sphere {
    constructor(radius, length) {
        super(radius); // Call the constructor of the parent class (Sphere)
        this.length = length; // Property to define the length of the cylinder
    }

    // Method to calculate the volume of the cylinder
    calculateVolume() {
        return Math.PI * Math.pow(this.radius, 2) * this.length;
    }
}

function calculateSpheresInCylinder(sphere, cylinder) {
    // Check if the sphere can fit inside the cylinder
    if (sphere.radius > cylinder.radius) {
        throw new Error("The radius of the sphere cannot be greater than that of the cylinder.");
    }

    // Calculate the volumes
    const sphereVolume = sphere.calculateVolume();
    const cylinderVolume = cylinder.calculateVolume();

    // Calculate how many spheres fit inside the cylinder
    return Math.floor(cylinderVolume / sphereVolume); // Return as a whole number
}


    // Create instances of Sphere and Cylinder
    const sphereRadius = 5; 
    const cylinderRadius = 6; 
    const cylinderLength = 10; 

    const sphere = new Sphere(sphereRadius);
    const cylinder = new Cylinder(cylinderRadius, cylinderLength);

    // Calculate how many spheres fit inside the cylinder
    const numberOfSpheres = calculateSpheresInCylinder(sphere, cylinder);
    console.log(`The number of spheres that can fit inside the cylinder is: ${numberOfSpheres}`);
}


// Main function to run all questions
async function main() {
    console.log('Lab 2 - JavaScript Version\n');
    
    await question1();
    await question2();
    await question3();
    await question4();
    await question5();
    
    rl.close();
}

// Run the program
main();


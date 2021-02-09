// You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that 
// will bring it closer to the desired frequency. To reduce waste and the time it takes to make each crystal 
// your program needs to complete the process with the least number of operations. Each operation takes the same amount of time, 
// but since they are done at different parts of the factory, the crystals have to be transported and thoroughly washed every time 
// an operation different from the previous must be performed, so this must also be taken into account. When determining the order, 
// always attempt to start from the operation that removes the largest amount of material.
// The different operations you can perform are the following:
// •	Cut – cuts the crystal in 4
// •	Lap – removes 20% of the crystal’s thickness
// •	Grind – removes 20 microns of thickness
// •	Etch – removes 2 microns of thickness
// •	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
// •	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); 
// do this after every batch of operations that remove material
// At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, 
// representing the thickness of crystal ore in microns. 
// Process each chunk and print to the console the order of operations and number of times they need to be repeated to 
// bring them to the desired thickness.
// The input comes as a numeric array with a variable number of elements. 
// The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
// The output is the order of operation and how many times they are repeated, 
// every operation on a new line. See the examples for more information.


function radioCrystals(arr) {
    let desiredCrystal = arr[0];


    for (let i = 1; i < arr.length; i++) {
        let currentCrystal = arr[i];

        console.log(`Processing chunk ${currentCrystal} microns`);

        let cut = (number) => number / 4;
        let lap = (number) => number - number * 0.2;
        let grind = (number) => number - 20;
        let etch = (number) => number - 2;
        let xRay = (number) => number + 1;

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        while (currentCrystal !== desiredCrystal) {
            while (currentCrystal / 4 >= desiredCrystal) {
                currentCrystal = cut(currentCrystal);
                cutCount++;
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                currentCrystal = Math.floor(currentCrystal);
            }

            while (currentCrystal - currentCrystal * 0.2 >= desiredCrystal) {
                currentCrystal = lap(currentCrystal);
                lapCount++;
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                currentCrystal = Math.floor(currentCrystal);
            }

            while (currentCrystal - 20 >= desiredCrystal) {
                currentCrystal = grind(currentCrystal);
                grindCount++;
            }

            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log(`Transporting and washing`);
                currentCrystal = Math.floor(currentCrystal);
            }

            while (currentCrystal - 2 >= desiredCrystal - 1) {
                currentCrystal = etch(currentCrystal);
                etchCount++;
            }

            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log(`Transporting and washing`);
                currentCrystal = Math.floor(currentCrystal);
            }

            if (currentCrystal < desiredCrystal) {
                currentCrystal = xRay(currentCrystal);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${desiredCrystal} microns`);
    }

}





radioCrystals([1375, 50000]);



// Write a function that stores cars in garages. You will be given an array of strings. 
// Each string will contain number of a garage and info about a car. You have to store the car (with its info) in the given garage. 
// The info about the car will be in the format "{key}: {value}, {key}: {value}…". If the garage does not exist, create it. 
// The cars will always be unique. At the end print the result in the format:
// "Garage № {number}:
// --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
// --- {the same for the next car}
// Garage № {number}: …"



function garage(input) {
    let garages = {}

    for (let line of input) {
        let[garage, carInfo] = line.split(" - ");

        if(!garages.hasOwnProperty(garage)){
            garages[garage] = [];
        }

        garages[garage].push(carInfo);
    }

    let output = "";

    Object.entries(garages).sort((a, b) => a[0] - b[0]).forEach(([garage, cars]) => {
        output += `Garage № ${garage}\n`;
        for (let currCar of cars) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`  
        }
    });

    console.log(output);
}

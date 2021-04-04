// You have just bought the latest and greatest computer game – Need for Seed III. We know that you can`t wait to start playing. Pick your favorite cars and drive them all you want!
// On the first line of the standard input you will receive an integer n – the number of cars that you can obtain. On the next n lines the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
// {car}|{mileage}|{fuel}
// Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
// •	Drive : {car} : {distance} : {fuel} 
// o	You need to drive the given distance and you will need the given fuel to do that. If the car doesn`t 
// have enough fuel print:
// "Not enough fuel to make that ride"
// o	If the car has the required fuel available in the tank, increase its mileage with the given distance, 
// decrease its fuel with the given fuel and print: 
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// o	You like driving new cars only, so if the mileage of a car reaches 100 000 km, remove it from the collection(s). 
// Print:
// "Time to sell the {car}!"
// •	Refuel : {car} : {fuel}
// o	Refill the tank of your car. 
// o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank,
//  take only what is required to fill it up. 
// o	Print a message in the following format:
// "{car} refueled with {fuel} liters"
// •	Revert : {car} : {kilometers}
// o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it
//  with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
// DO NOT print anything.
// Upon receiving the "Stop" command you need to print all cars in your possession, sorted by their mileage in decscending 
// order, then by their name in ascending order, in the following format:
// "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
// Input/Constraints
// •	The mileage and fuel of the cars will be valid, 32-bit integers and will never be negative.
// •	The fuel and distance amounts in the commands will never be negative.
// •	The car names in the commands will always be valid 




function needForSpeed(input){
    let n = Number(input.shift());

    let cars = {};

    for(let i = 0; i < n; i++){
        let [model, mileAge, fuel] = input.shift().split("|");

        mileAge = Number(mileAge);
        fuel = Number(fuel);
        if(!cars.hasOwnProperty(model)){
            cars[model] = {mileAge, fuel};
        }
    }

    let line;

    while((line = input.shift()) !== "Stop"){
        let [command, model, ...args] = line.split(" : ");


        if(command === "Drive"){
            let [distance, fuel] = args;
            distance = Number(distance);
            fuel = Number(fuel);
            if(fuel > cars[model].fuel){
                console.log("Not enough fuel to make that ride");
            }else{
                cars[model].fuel -= fuel;
                cars[model].mileAge += distance;
                console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if(cars[model].mileAge >= 100000){
                    console.log(`Time to sell the ${model}!`);

                    delete cars[model];
                }
            }
        }else if(command === "Refuel"){
            let fuel = Number(args);

            let refueled = cars[model].fuel + fuel > 75 ? 75 - cars[model].fuel : fuel;
            cars[model].fuel += refueled;

            console.log(`${model} refueled with ${refueled} liters`);
        }else if(command === "Revert"){
            let kilometers = Number(args);

            cars[model].mileAge -= kilometers;

            if(cars[model].mileAge < 10000){
                cars[model].mileAge = 10000;
            }else{
                console.log(`${model} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    let sorted = Object.entries(cars).sort(sortCars);


    for (let car of sorted) {
        console.log(`${car[0]} -> Mileage: ${car[1].mileAge} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    }

    function sortCars(a, b){
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;


        let sortByMileAge = bInfo.mileAge - aInfo.mileAge;

        if(sortByMileAge === 0){
            return aName.localeCompare(bName);
        }
        return sortByMileAge;
    }
}   



needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);

// another solution. 


  function needForSpeedTEST(input){
    let n = Number(input.shift());

    let fuelObj = {};

    let mileageObj = {};

    for(let i = 0; i < n; i++){
        let [car, mileage, fuel] = input.shift().split("|");

        fuelObj[car] = Number(fuel);
        mileageObj[car] = Number(mileage);
    }

    for (const line of input) {
        let [command, car, distance, fuel ] = line.split(" : ");
        distance = Number(distance);
        fuel = Number(fuel);

        if(command === "Drive"){
            if(fuelObj[car] < fuel){
                console.log(`Not enough fuel to make that ride`);
            }else{
                mileageObj[car] += distance;
                fuelObj[car] -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if(mileageObj[car] >= 100000){
                    delete mileageObj[car];
                    delete fuelObj[car];
                    console.log(`Time to sell the ${car}!`);
    
                }   
            }
        }else if(command === "Refuel"){
            fuel = distance;
            let refuel = fuelObj[car] + fuel > 75 ? 75 - fuelObj[car] : fuel; // check here
            fuelObj[car] += refuel;
            console.log(`${car} refueled with ${refuel} liters`)


        }else if(command === "Revert"){
            mileageObj[car] -= Number(distance);
            

            if(mileageObj[car] < 10000){
                mileageObj[car] = 10000;
            }else{
                console.log(`${car} mileage decreased by ${distance} kilometers`);
            }
        }  
    }

    Object.keys(fuelObj).sort((a, b) => mileageObj[b] - mileageObj[a] || a.localeCompare(b)).forEach(car => {
        console.log(`${car} -> Mileage: ${mileageObj[car]} kms, Fuel in the tank: ${fuelObj[car]} lt.`);
    });
}

// Anno 1681. The Caribbean. The golden age of piracy. You are a well-known pirate captain by the name of Jack… Daniels. 
// Together with your comrades Jim (Beam) and Johnny (Walker) you have been roaming the seas, 
// looking for gold and treasure… and the occasional killing, of course. Go ahead, target some wealthy settlements and show 
// them the pirate`s way!
// Description
// Until the "Sail" command is given you will be receiving:
// •	Cities that you and your crew have targeted, with their population and gold, separated by "||".
// •	If you receive a city which has been already received, you have to increase the population and gold with the given values.
// After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
// Events will be in the following format:
// •	"Plunder=>{town}=>{people}=>{gold}"
// o	You have successfully attacked and plundered the town, killing the given number of 
// people and stealing the respective amount of gold. 
// o	For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// o	If any of those two values (population or gold) reaches zero, the town is disbanded.
// 	You need to remove it from your collection of targeted cities and print the following message:
//  "{town} has been wiped off the map!"
// o	There will be no case of receiving more people or gold than there is in the city.
// •	"Prosper=>{town}=>{gold}"
// o	There has been a dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
// o	The gold amount can be a negative number, so be careful. If a negative amount of gold is given print:
//  "Gold added cannot be a negative number!" and ignore the command.
// o	If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following
//  message: "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
// Input
// •	On the first lines, until the "Sail" command, you will be receiving strings representing the 
// cities with their gold and population, separated by "||"
// •	On the next lines, until the "End" command, you will be receiving strings representing the actions described above, 
// separated by "=>"
// Output
// •	After receiving the "End" command if there are any existing settlements on your list of targets, you need to print 
// all of them, sorted by their gold in descending order, then by their name in ascending order, in the following format:
// Ahoy, Captain! There are {count} wealthy settlements to go to:
// {town1} -> Population: {people} citizens, Gold: {gold} kg
//    …
// {town…n} -> Population: {people} citizens, Gold: {gold} kg
// •	If there are no settlements left to plunder, print:
// "Ahoy, Captain! All targets have been plundered and destroyed!"
// Constraints
// •	The initial population and gold of the settlements will be valid, 32-bit integers, 
// will never be negative or exceed the respective limits.
// •	The town names in the events will always be valid towns that should be on your list.

function pirates(input) {
    let cities = {};
    let line;

    while ((line = input.shift()) !== "Sail") {
        let [city, population, gold] = line.split("||");
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(city)) {
            cities[city] = { population: 0, gold: 0 }
        }

        cities[city].population += population;
        cities[city].gold += gold;
    }
    


    while ((line = input.shift()) !== "End") {
        let [command, town, ...args] = line.split("=>");

        if (command === "Plunder") {
            let [people, gold] = args;
            people = Number(people);
            gold = Number(gold);

            cities[town].population -= people;
            cities[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[town].population <= 0 || cities[town].gold <= 0) {

                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (command === "Prosper") {
            let gold = args;
            gold = Number(gold);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }
    }

    let sortedCities = Object.entries(cities).sort(sortingCities);
    if(sortedCities.length === 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }else{
        console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`)
        for (let town of sortedCities) {
            console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`);
        }
    }
    
    
    function sortingCities(a, b){
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        let sortedByGold = bInfo.gold - aInfo.gold;

        if(sortedByGold === 0){
            return aName.localeCompare(bName);
        }

        return sortedByGold;
    }
}








pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
  ]);


  // Another Solution

function piratesSolution1(input) {
    let actions = {
        Plunder(towns, townName, people, gold) {
            let town = towns[townName];
            town.population -= Number(people);
            town.gold -= Number(gold);

            console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (town.population <= 0 || town.gold <= 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete towns[townName];
            }
        },

        Prosper(towns, townName, gold) {

            let town = towns[townName];
            if (Number(gold) > 0) {
                town.gold += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${town.gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
    }
    let towns = {}
    let line;



    while ((line = input.shift()) != "Sail") {
        let [townName, population, gold] = line.split("||");

        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = { population: 0, gold: 0 };
        }

        towns[townName].population += Number(population);
        towns[townName].gold += Number(gold);
    }

    while ((line = input.shift()) != "End") {
        let [actionName, townName, ...args] = line.split("=>");


        let action = actions[actionName];
        action(towns, townName, ...args);

    }

    let sorted = Object.entries(towns).sort(compareTowns);

    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

        for (let town of sorted) {
            console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

    function compareTowns([nameA, townA], [nameB, townB]) {
        return townB.gold - townA.gold || nameA.localeCompare(nameB);
    }
}

//another solution:




function piratesTEST(input) {
    let citiesMap = {}


    while (input[0] !== "Sail") {
        let [cityName, people, gold] = input.shift().split("||");
        people = Number(people);
        gold = Number(gold);


        if (citiesMap.hasOwnProperty(cityName)) {
            citiesMap[cityName].people += people;
            citiesMap[cityName].gold += gold;
        } else {
            citiesMap[cityName] = { gold, people }
        }
    }

    input.shift();


    while (input[0] !== "End") {
        let [command, ...args] = input.shift().split("=>");


        if (command === "Plunder") {
            let [cityName, people, gold] = args;
            people = Number(people);
            gold = Number(gold);


            citiesMap[cityName].people -= people;
            citiesMap[cityName].gold -= gold;
            console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (citiesMap[cityName].people <= 0 || citiesMap[cityName].gold <= 0) {
                console.log(`${cityName} has been wiped off the map!`);

                delete citiesMap[cityName];
            }
        } else {
            let [cityName, gold] = args;

            gold = Number(gold);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                citiesMap[cityName].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${cityName} now has ${citiesMap[cityName].gold} gold.`);
            }
        }
    }


    let sortedCities = Object.entries(citiesMap).sort(sortCities);

    if (sortedCities.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`);


        for (const [cityName, cityInfo] of sortedCities) {
            let { gold, people } = cityInfo;

            console.log(`${cityName} -> Population: ${people} citizens, Gold: ${gold} kg`)
        }
    }

    function sortCities(a, b) {
        let [aCityName, aCityInfo] = a;
        let [bCityName, bCityInfo] = b;


        let result = bCityInfo.gold - aCityInfo.gold;


        if (result === 0) {
            return aCityName.localeCompare(bCityName);
        }

        return result;
    }
}
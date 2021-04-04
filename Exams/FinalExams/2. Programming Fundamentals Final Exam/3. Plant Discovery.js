// You have now returned from your world tour. On your way you have discovered some new plants and you want to 
// gather some information about them and create an exhibition to see which plant is highest rated.
// On the first line you will receive a number n. On the next n lines, you will be given some information about the
//  plants that you have discovered in the format: "{plant}<->{rarity}". Store that information, because you will need it later. 
//  If you receive a plant more than once, update its rarity.
// After that until you receive the command "Exhibition" you will be given some of these commands:
// •	Rate: {plant} - {rating} – add the given rating to the plant (store all ratings)
// •	Update: {plant} - {new_rarity} – update the rarity of the plant with the new one
// •	Reset: {plant} – remove all the ratings of the given plant
// Note: If any of the command is invalid, print "error"
// After the command "Exhibition" print the information that you have about the plants in the following format:
// Plants for the exhibition:
// - {plant_name}; Rarity: {rarity}; Rating: {average_rating formatted to the 2nd digit}
// …
// The plants should be sorted by rarity descending, then by average rating descending
// Input / Constraints
// •	You will recive the input as described above
// •	JavaScript: you will receive a list of strings
// Output
// •	Print the information about all plants as described above


function plantDiscovery(input) {

    let n = Number(input.shift());
    let plants = {};
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split("<->");
        rarity = Number(rarity);
        plants[plant] = { rarity, ratings: [] };

    }


    let line;
    while ((line = input.shift()) !== "Exhibition") {

        let [command, ...args] = line.split(": ");

        if (command === "Rate") {
            let [plant, rating] = args.shift().split(" - ");
            if (plants.hasOwnProperty(plant)) {
                rating = Number(rating);
                plants[plant].ratings.push(rating);
            } else {
                console.log("error");
            }
        } else if (command === "Update") {
            let [plant, newRarity] = args.shift().split(" - ");
            if (plants.hasOwnProperty(plant)) {
                newRarity = Number(newRarity);

                plants[plant].rarity = newRarity;

            } else {
                console.log(`error`);
            }

        } else if (command === "Reset") {
            let plant = args;
            if (plants.hasOwnProperty(plant)) {
                plants[plant].ratings = [];
            } else {
                console.log(`error`);
            }
        } else {
            console.log("error");
        }
    }

    let sortedPlants = Object.entries(plants).sort(sortPlants);
    console.log(`Plants for the exhibition:`);
    for (const plant of sortedPlants) {
        let averageRating = 0;
        if (plant[1].ratings.length > 0) {
            averageRating = plant[1].ratings.reduce((a, b) => a + b, 0) / plant[1].ratings.length;

        }
        console.log(` - ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function sortPlants(a, b) {
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        let sortedByRarityDescending = bInfo.rarity - aInfo.rarity;

        if (sortedByRarityDescending == 0) {
            return (bInfo.ratings.reduce((a, b) => a + b, 0) / bInfo.ratings.length) -
                (aInfo.ratings.reduce((a, b) => a + b, 0) / aInfo.ratings.length);
        }
        return sortedByRarityDescending;
    }
}




plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);

// Another solution
function plantDiscoveryTEST(input) {
    let plants = {};

    input.splice(0, Number(input.shift())).forEach((element) => {
        let [plant, rarity] = element.split('<->');
        rarity = Number(rarity);

        plants[plant] = { rarity, ratings: [] };
    });

    const commandsParser = {
        'Rate': (plant, rating) => {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].ratings.push(Number(rating));
            } else {
                console.log('error');
            }
            return plants;
        },
        'Update': (plant, newRarity) => {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = Number(newRarity);
            } else {
                console.log('error');
            }
            return plants;
        },
        'Reset': (plant) => {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].ratings = [];
            } else {
                console.log('error');
            }
            return plants;
        }
    }

    for (const line of input) {
        if (line !== 'Exhibition') {
            let [command, tokens] = line.split(': ');
            let [...argu] = tokens.split(' - ');
            commandsParser[command](...argu);
        } else {
            break;
        }
    }

    console.log('Plants for the exhibition:')
    Object.entries(plants)
        .sort(comparePlants)
        .forEach(([plantName, plantInfo]) => {
            let averageRating = 0;
            if (plantInfo.ratings.length > 0) {
                averageRating = plantInfo.ratings.reduce((acc, value) => acc + value, 0) / plantInfo.ratings.length;
            }
            console.log(`- ${plantName}; Rarity: ${plantInfo.rarity}; Rating: ${averageRating.toFixed(2)}`);
        });



    function comparePlants(a, b) {
        let [aPlant, aInfo] = a;
        let [bPlant, bInfo] = b;

        let byRarityDescending = bInfo.rarity - aInfo.rarity;

        if (byRarityDescending === 0) {
            return (bInfo.ratings.reduce((acc, value) => acc + value, 0) / bInfo.ratings.length) -
                (aInfo.ratings.reduce((acc, value) => acc + value, 0) / aInfo.ratings.length);

        }

        return byRarityDescending;
    }
}
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
    let plants = {};

    input.splice(0, Number(input.shift())).forEach((element) => {
        let [plant, rarity] = element.split('<->');
        rarity = Number(rarity);

        plants[plant] = { rarity, ratings:[] };
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
            averageRating = plantInfo.ratings.reduce((acc, value) => acc + value,0) / plantInfo.ratings.length;
        }
        console.log(`- ${plantName}; Rarity: ${plantInfo.rarity}; Rating: ${averageRating.toFixed(2)}`);
    });



    function comparePlants(a, b){
        let [aPlant, aInfo] = a;
        let [bPlant, bInfo] = b;

        let byRarityDescending = bInfo.rarity - aInfo.rarity;

        if(byRarityDescending === 0){
            return (bInfo.ratings.reduce((acc, value) => acc + value, 0) / bInfo.ratings.length) - 
            (aInfo.ratings.reduce((acc, value) => acc + value, 0) / aInfo.ratings.length);

        }

        return byRarityDescending;
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

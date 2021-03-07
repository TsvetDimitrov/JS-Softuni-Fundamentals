// Write a function that collects and orders information about traveling destinations.
// As input you will receive an array of strings.
// Each string will consist of the following information with format:
// "Country name > Town name > Travel cost"
// Country name will be unique string, Town name will also be unique string, Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer. 
// Have in mind that one Country may have several Towns to visit.
// After you finish the organizational part, you need to let Steven know which destination point to visit first. 
// The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.



function travelTime(input){
    let destinations = {}



    for(let i = 0; i < input.length; i++){
        let [country, town, price] = input[i].split(" > ").filter(e => e != "");
        price =+ price;

        town = town[0].toUpperCase() + town.slice(1);


        if(!destinations.hasOwnProperty(country)){
            destinations[country] = {};
        }
        if(!destinations[country].hasOwnProperty(town)){
            destinations[country][town] = price;
        }

        let prevPrice = destinations[country][town];

        if(prevPrice > price){
            destinations[country][town] = price;
        }
    }

    let orderedCountries = [...Object.keys(destinations)].sort((a, b) => a.localeCompare(b));
    let result = "";

    for (let country of orderedCountries) {
        result += country + " -> ";
        let sortedPrices = [...Object.keys(destinations[country])].sort((a, b) => travelCost(a, b, destinations, country));
        for (let town of sortedPrices) {
            result += `${town} -> ${destinations[country][town]} `;   
        }

        result += '\n';
    }
    console.log(result);


    function travelCost(town1, town2, destination, country){
        let priceOne = destination[country][town1];
        let priceTwo = destination[country][town2];

        return priceOne - priceTwo;
    }
}



travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );

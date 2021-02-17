// Receive a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"



function city(city){
    let properties = Object.keys(city);

    for (const key of properties){
            console.log(`${key} -> ${city[key]}`);
    }
}



city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)


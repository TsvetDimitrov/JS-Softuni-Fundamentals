// Now that you have planned out your tour, you are ready to go! Your next task is to mark all the points on the map that 
// you are going to visit.
// You will be given a string representing some places on the map. You have to filter only the valid ones. A valid location is:
// •	Surrounded by "=" or "/" on both sides (the first and the last symbols must match)
// •	After the first "=" or "/" there should be only letters (the first must be upper-case)
// •	The letters must be at least 3
// Example: In the string "=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=" only the first two locations are valid.
// After you have matched all the valid locations, you have to calculate travel points. They are calculated by summing 
// the lengths of all the valid destinations that you have found on the map. At the end, on the first line print the following: 
// "Destinations: {destinations joined by ', '}". On the second line print "Travel Points: {travel_points}".
// Input / Constraints
// •	You will recive a string representing the locations on the map
// •	JavaScript: you will receive a single parameter: string
// Output
// •	Print the messages described above

function destinationMapper(string){
    let regex = /(=|\/)([A-Z][A-Za-z]{2,})\1/g

    let matches = string.match(regex);
    let cities = [];
    let count = 0;

    if(regex.test(string)){
        matches.forEach(match => {
            let city = match.slice(1,-1);
            cities.push(city);
            count += city.length; 
        });
    }
    
    console.log(`Destinations: ${cities.join(", ")}`);
    console.log(`Travel Points: ${count}`);
}




destinationMapper(`ThisIs some InvalidInput`);



function destinationMapperTEST(string){

    let regex = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;

    let count = 0;
    let city = [];

    if(regex.test(string)){
        const ourDestination = string.match(regex);

        ourDestination.forEach(dest => {
            count += (dest.length - 2);                     //We subtract 2, because we have 2 special symbols in the match. 
            city.push(dest.slice(1, (dest.length - 1)));    //OR dest.slice(1, -1); It is the same as dest.slice(1, (dest.length -1));
        });
    }


    console.log(`Destinations: ${city.join(", ")}`);
    console.log(`Travel Points: ${count}`);
}





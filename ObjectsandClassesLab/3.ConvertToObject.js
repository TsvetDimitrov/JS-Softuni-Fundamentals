// Write a function that receives a string in JSON format and converts it to object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"


function convertToObject(jsonString){
    let person = JSON.parse(jsonString);

    for (let key in person) {
        console.log(`${key}: ${person[key]}`) 
        
    }
}




convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
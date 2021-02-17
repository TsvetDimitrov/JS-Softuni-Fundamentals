// Write a Function That Receives Name, LastName, HairColor and Sets Them to an Object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.



function convertToJSON(name, lastName, hairColor){

    let man = {
        name,
        lastName,
        hairColor
    }

    let json = JSON.stringify(man);


    console.log(json)
}


convertToJSON('George',
'Jones',
'Brown'
);

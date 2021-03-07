// You are given an array of strings. Every odd string is representing a resource 
// (e.g. Gold, Silver, Copper, and so on), and every even – quantity. 
// Your task is to collect the resources and print them each on a new line. 
// Print the resources and their quantities in format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000]



function minerTask(input){
    let inputArr = [];

    for(let currentLine of input){
        inputArr.push(currentLine);
    }

    let resourceAndQuantity = new Map();

    for(let i = 0; i<inputArr.length; i+=2){
        let resource = inputArr[i];

        if(resource.toLowerCase() === "stop"){
            break;
        }
        let quantity = parseInt(inputArr[i+1]);

        if(resource in resourceAndQuantity){
            resourceAndQuantity[resource] += quantity;
        }else{
            resourceAndQuantity[resource] = quantity
        }
    }

    for (let key in resourceAndQuantity) {
        if (resourceAndQuantity.hasOwnProperty(key)) {
            console.log(key + ` -> ` + resourceAndQuantity[key]);
        }
    }
}




minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );

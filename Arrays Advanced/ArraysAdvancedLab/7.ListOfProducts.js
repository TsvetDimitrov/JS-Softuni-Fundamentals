// You will receive an array of products. 
// Print a numbered array of all the products ordered by name.


function listOfProducts(input) {
    input = input.sort();
    

    for(let i = 0; i < input.length; i++){
        console.log(`${i+1}.${input[i]}`);
    }
}


listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
// Write a function that calculates the total price of an order and prints it on the console. 
// The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. 
// The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.

function orders(product, quantity) {
    if (product === "coffee") {
        return (quantity * 1.5).toFixed(2);
    } else if (product === "water") {
        return (quantity * 1).toFixed(2);
    } else if (product === "coke") {
        return (quantity * 1.4).toFixed(2);
    } else if (product === "snacks") {
        return (quantity * 2).toFixed(2);
    }
}


console.log(orders("water", 5));
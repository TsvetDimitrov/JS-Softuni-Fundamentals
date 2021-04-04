// Write a program that prints you a receipt for your new computer. 
// You will receive the prices (without tax) of the parts until you receive what type of customer is this - special or regular. 
// Once you receive the type of the customer you should print the receipt.
// The taxes are 20% of each part's price you receive. 
// If the customer is special, then he has a 10% discount of the price of the total price with taxes.
// If a given price is not positive number, you should print "Invalid price!" on the console and continue with the next price.
// If total price is equal to zero, you should print "Invalid order!" on the console.
// Input
// •	You will receive numbers representing prices (without tax) until command "special" or "regular":
// Output
// •	The receipt should be in the following format: 

// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"
// Constraints
// Note: All prices should be displayed to the second digit after the decimal point! 
// The discount is applied only on the total price.  Discount is only applicable to the final price!


function computerStore(arr) {

    let price = arr.shift();
    let sum = 0;
    let taxes = 1;
    let sumWithTaxes = 0;


   
        while (price != 'special' && price != `regular`) {
            if (price <= 0) {
                console.log("Invalid price!");
                price = 0;
            }

            sum += Number(price);

            price = arr.shift();
        }

        if(sum == 0){
            return 'Invalid order!';
        }
        taxes = sum * 20 / 100;
        sumWithTaxes = sum + (sum * 20 / 100);
        if (price == "special") {
            sumWithTaxes = sumWithTaxes - (sumWithTaxes * 10 / 100);
        }
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${sumWithTaxes.toFixed(2)}$`);

    
}




computerStore([
    'regular'
]

);

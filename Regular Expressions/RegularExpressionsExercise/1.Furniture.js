// Write a function to calculate the total cost of different types of furniture. 
// You will be given some lines of input until you receive the line "Purchase". 
// For the line to be valid it should be in the following format:
// ">>{furniture name}<<{price}!{quantity}"
// The price can be floating point number or whole number. Store the names of the furniture and the total price. 
// At the end print the each bought furniture on separate line in the format:
// "Bought furniture:
// {1st name}
// {2nd name}
// …"
// And on the last line print the following: "Total money spend: {spend money}" formatted to the second decimal point.



function furntinure(input){
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.?[\d]+)?)!(?<quantity>[\d]+)/g;

    let result = "Bought furniture:\n";
    let price = 0;
    for (const line of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.?[\d]+)?)!(?<quantity>[\d]+)/g;
        let match = pattern.exec(line);
        if(match){
            
            result += match.groups.name + `\n`; 
            price += Number(match.groups.price) * Number(match.groups.quantity);
        }
        
    }

    result += `Total money spend: ${price.toFixed(2)}`
    console.log(result);


}


furntinure([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);

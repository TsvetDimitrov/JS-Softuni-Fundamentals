



function solve(arr){
    let prices = [];
    let items = arr.shift().split("|");
    let budget = Number(arr.shift());
    let startBudget = budget;

    

    while(items.length > 0){
        let [item, price] = items.shift().split("->");
        if(item === "Clothes" && Number(price) <= 50.00 && budget >= Number(price)){
            budget -= Number(price);
            let increasedPrice = Number(price) + (Number(price) * 0.4);
            prices.push(increasedPrice.toFixed(2));
        }else if(item === "Shoes" && Number(price) <= 35.00 && budget >= Number(price)){
            budget -= Number(price);
            let increasedPrice = Number(price) + (Number(price) * 0.4);
            prices.push(increasedPrice.toFixed(2));
        }else if(item === "Accessories" && Number(price) <= 20.50 && budget >= Number(price)){
            budget -=Number(price);
            let increasedPrice = Number(price) + (Number(price) * 0.4);
            prices.push(increasedPrice.toFixed(2));
        }
        
    }


    console.log(prices.join(" "));
    let sum = 0;
    for(let i = 0; i<prices.length; i++){
        sum += Number(prices[i]);
    }
    console.log(`Profit: ${((sum - startBudget) + budget).toFixed(2)}`)


    if(sum + budget >= 150){
        console.log(`Hello, France!`)
    }else{
        console.log(`Time to go.`)
    }
}




solve((["Shoes->31.20|Clothes->20.30|Accessories->20|Shoes->25.60|Shoes->13.30|Clothes->48.60",
"1000"])

);
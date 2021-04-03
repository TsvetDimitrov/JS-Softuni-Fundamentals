function solve(budget, students, priceOfFlour, priceOfEgg, priceOfApron){
    // let arr = input.split(", ");
    // let budget = Number(arr.shift());
    // let students = Number(arr.shift());
    // let priceOfFlour = Number(arr.shift());
    // let priceOfEgg = Number(arr.shift());
    // let priceOfApron = Number(arr.shift());

    let price = 0; 
    let freePackages = 0; 
    let studentsApron = students + Math.ceil((students * 0.2));


    for(let i = 0; i <= students; i++){
        if( i % 5 == 0 && i != 0){
            freePackages++;
        }

    }
    
    let priceApronPlus20= priceOfApron * studentsApron; // 30
    let priceForEggs = students * 10 * priceOfEgg; // 2 
    let flourPrice = priceOfFlour * (students - freePackages)
    


    price = priceApronPlus20 +priceForEggs + flourPrice;
    if( price <= budget){
        console.log(`Items purchased for ${price.toFixed(2)}$.`);
    }else{
        let neededMoney = price - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
}



solve(50, 2, 1.0, 0.10, 10.0);
    
    
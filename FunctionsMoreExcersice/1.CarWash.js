// Write a JS function that receives some commands. Depending on the command add a percentage of how much the car is cleaned. 
// Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value with 20%
// •	vacuum cleaner – increase the value with 25%
// •	mud – decrease the value with 10%
// The input comes as an array strings. When finished cleaning the car, print the resulting value in the format:
// "The car is {value}% clean.". The value should be rounded to the second decimal point.



function carWash(arr){
    let totalClean = 0;
    function soap(){
        totalClean +=10;
        return totalClean;
    }

    function vacuumCleaner(){
        let percentClean = 25;
        totalClean = totalClean + (totalClean * (percentClean /100));
        return totalClean;
    }

    function mud(){
        let percentDirty = 10;
        totalClean = totalClean - (totalClean * (percentDirty / 100));
        return totalClean;
    }

    function water(){
        let percentClean = 20;
        totalClean = totalClean + (totalClean * (percentClean/100));
        return totalClean;
    }

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "soap"){
            soap();
        }else if(arr[i] === "vacuum cleaner"){
            vacuumCleaner();
        }else if(arr[i] === "water"){
            water();
        }else{
            mud();
        }
    }
    console.log(`The car is ${totalClean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);




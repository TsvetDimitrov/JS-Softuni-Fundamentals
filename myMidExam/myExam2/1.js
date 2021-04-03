




function solve(input){
    let daysOfAdventure = Number(input.shift());
    let countOfPlayers = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    let [...energyloss] = input.map(Number);
    let ranOutOfEnergy = false;

    let neededWater = daysOfAdventure * countOfPlayers * waterPerDay; 
    let neededFood = daysOfAdventure * countOfPlayers * foodPerDay;

    for(let i = 1; i <= daysOfAdventure; i++){
        groupEnergy -= energyloss[i-1];

        if(groupEnergy <= 0){
            ranOutOfEnergy = true;
            break;
        }
        if(i % 2 == 0 && i !== 0){
            let boostEnergy = groupEnergy * 0.05;
            let dropWater = neededWater * 0.3;
            neededWater -= dropWater;
            groupEnergy += boostEnergy;
        }
        if(i % 3 === 0 && i != 0){
            let eatenFood = neededFood / countOfPlayers;
            neededFood -= eatenFood;
            let boostEnergy = groupEnergy * 0.1;
            groupEnergy += boostEnergy;
        }
    }


    if(!ranOutOfEnergy){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }else{
        console.log(`You will run out of energy. You will be left with ${neededFood.toFixed(2)} food and ${neededWater.toFixed(2)} water.`)
    }
}



solve([
    '12',    '6',     '4430',
    '9.8',   '5.5',   '620.3',
    '840.2', '960.1', '220',
    '340',   '674',   '365',
    '345.5', '212',   '412.12',
    '258',   '496',   ''
  ]
    );
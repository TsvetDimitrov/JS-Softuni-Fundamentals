// Pirates are invading the sea and you're tasked to help them plunder
// Create a program that checks if a target plunder is reached. First you will receive how many days the pirating lasts. Then you will receive how much the pirates plunder for a day. Last you will receive the expected plunder at the end.
// Calculate how much plunder the pirates manage to gather. Each day they gather plunder. Keep in mind that every third day they attack more ships and they add additional plunder to their total gain which is 50% of the daily plunder. Every fifth day the pirates encounter a warship and after the battle they lose 30% of their total plunder.
// If the gained plunder is more or equal to the target print the following:
// "Ahoy! {totalPlunder} plunder gained."
// If the gained plunder is less than the target. Calculate the percentage left and print the following:
// "Collected only {percentage}% of the plunder."
// Both numbers should be formatted to the 2nd decimal place.
// Input
// •	On the 1st line you will receive the days of the plunder – an integer number in the range [0…100000]
// •	On the 2nd line you will receive the daily plunder – an integer number in the range [0…50]
// •	On the 3rd line you will receive the expected plunder – a real number in the range [0.0…10000.0]
// Output
// •	 In the end print whether the plunder was successful or not following the format described above.


function blackFlag(input){
    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let gatheredPlunder = 0;

    for(let i = 1; i <= days; i++){
        gatheredPlunder += dailyPlunder;
        if(i % 3 === 0 && i != 0){
            let additionalPlunder = dailyPlunder / 2;
            gatheredPlunder += additionalPlunder;
        }
        if(i % 5 === 0 && i != 0){
            let lostPlunder = gatheredPlunder * 0.3;
            gatheredPlunder -= lostPlunder;
        }
    }

    if(gatheredPlunder >= expectedPlunder){
        console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percentage = gatheredPlunder / expectedPlunder;
        percentage *= 100; 
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}



blackFlag([`10`,
    `20`,
    `380`]
    );

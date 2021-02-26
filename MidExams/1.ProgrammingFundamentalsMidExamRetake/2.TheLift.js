// Write a program that finds a place for the tourist on a lift. 
// Every wagon should have a maximum of 4 people on it. 
// If a wagon is full you should direct the people to the next one with space available.
// Input
// •	On the first line you, will receive how many people are waiting to get on the lift
// •	On the second line, you will you will receive the current state of the lift separated by " ".
// Output
// When there is no more available space left on the lift, or there are no more people in the queue, 
// you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:
// •	If there are no more people and the lift have empty spots you should print:
// "The lift has empty spots!
// {wagons separated by ' '}"
// •	If there are still people on the queue and no more available space, you should print:
// "There isn't enough space! {people} people in a queue!
// {wagons separated by ' '}"
// •	If the lift is full and there are no more people in the queue, you should print only the wagons separated by " "


function memoryGame(input){
    let people = Number(input.shift());
    let spaces = input.shift().split(" ").map(Number);
    let freeSpaces = false;
    for(let i = 0; i<spaces.length; i++){
        if(spaces[i] < 4 && people >= 0){
            let freespace = 4 - spaces[i];
            if(people <= freespace){
                freespace = people;
            }
            people -= freespace;
            spaces[i] = spaces[i] + freespace;
            
        }
    }

    for(let i = 0; i <spaces.length; i++){
        if(spaces[i] < 4){
            freeSpaces = true;
        }
    }

    if(people != 0){
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(spaces.join(" "));
    }else if(freeSpaces){
        console.log(`The lift has empty spots!`);
        console.log(spaces.join(" "));
    }else{
        console.log(spaces.join(" "));
    }

    
}



memoryGame([
    "16",
    "0 0 0 0"
   ]
   
   
   );

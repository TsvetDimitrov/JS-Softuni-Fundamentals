// You have initial health 100 and initial coins 0. You will be given a string, representing the dungeons rooms. 
// Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains item or a monster and a number, separated by space. ("item/monster number")
// •	If the first part is "potion": you are healed with the number in the second part. 
// But your health cannot exceed your initial health (100). Print: "You healed for {0} hp."
// After that, print your current health: "Current health: {0} hp."
// •	If the first part is "chest": You've found some coins, the number in the second part. Print: "You found {0} coins."
// •	In any other case you are facing a monster, you are going to fight. 
// The second part of the room, contains the attack of the monster. You should remove the monster's attack from your health. 
// o	If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.")
// o	If you've died, print "You died! Killed by {monster}." and your quest is over. 
// Print the best room you`ve manage to reach: "Best room: {room}".
// If you managed to go through all the rooms in the dungeon, print on the next three lines: 
// "You've made it!", "Coins: {coins}", "Health: {health}".
// Input
// You receive an array with one element- string, representing the dungeons rooms, separated with '|' (vertical bar): ["room1|room2|room3…"].


function dungeonDark(array){
    let splitRoom = array[0].split("|");
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    
    for(let i = 0; i <splitRoom.length; i++){
        let splitted = splitRoom[i].split(" ");
        let command = splitted[0];
        let number = Number(splitted[1]);
        roomCounter++;

        if(command == "potion"){
            if(health + number > 100){
                number = 100 - health; 
                health = 100;
            }else{
                health = health + number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(command === "chest"){
            foundCoins = number;
            coins += number;
            console.log(`You found ${foundCoins} coins.`);
        }else{
            health -= number;
        
        if(health > 0){
            console.log(`You slayed ${command}.`);
        }else{
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${roomCounter}`);
            return;
        }
    }
        
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);




}




dungeonDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

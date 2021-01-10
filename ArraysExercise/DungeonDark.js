function DungeonGame(stringArr){
let playerHealth = 100;
let playerCoinsFound = 0;
let counterRooms = 0;
let allCoins = 0;

let splitRoom = stringArr[0].split("|");

for(let i = 0; i < splitRoom.length; i++){
    let currentRoom = splitRoom[i].split(' ');
    let command = currentRoom[0];
    let num = Number(currentRoom[1]);
    counterRooms++;

    if(command === "potion"){
        if(playerHealth + num > 100){
            num = 100 - playerHealth;
            playerHealth = 100;
        }else{
            playerHealth = playerHealth + num;
        }
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${playerHealth} hp.`);
    }
    else if(command === "chest"){
        playerCoinsFound = Number(num);
        allCoins += Number(num);
        console.log(`You found ${playerCoinsFound} coins.`)
    }else{
        playerHealth -= Number(num);
     if(playerHealth> 0){
        console.log(`You slayed ${command}.`);
    }else{
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${counterRooms}`);
        return;
    }
}
}
console.log("You've made it!");
console.log(`Coins: ${allCoins}`);
console.log(`Health: ${playerHealth}`);
}




DungeonGame(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//DungeonGame(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
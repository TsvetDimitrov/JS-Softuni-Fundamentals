// You have initial health 100 and initial bitcoins 0. You will be given a string, representing the dungeons rooms. 
// Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains a command and a number, separated by space. The command can be:
// •	"potion"
// o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// o	First print: "You healed for {amount} hp.". 
// o	After that, print your current health: "Current health: {health} hp.".
// •	"chest"
// o	You've found some bitcoins, the number in the second part.
// o	Print: "You found {amount} bitcoins."
// •	In any other case you are facing a monster, you are going to fight. The second part of the room, contains the attack of the monster. You should remove the monster's attack from your health. 
// o	If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.")
// o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you`ve manage to reach: "Best room: {room}".
// If you managed to go through all the rooms in the dungeon, print on the next three lines: 
// "You've made it!", "Bitcoins: {bitcoins}", "Health: {health}".
// Input / Constraints
// You receive a string, representing the dungeons rooms, separated with '|' (vertical bar): "room1|room2|room3…".
// Output
// Print the corresponding messages, described above.




function muOnline(...input) {
    let rooms = input.shift().split("|");
    let health = 100;
    let coins = 0;
    let room = 0;
    let dead = false;
    for (let i = 0; i < rooms.length; i++) {
        let command = rooms[i];
        let splitted = command.split(" ");
        room++;

        if (splitted[0] === "potion") {
            let currentHealth = 0;
            if (Number(splitted[1]) + health > 100) {
                currentHealth = 100 - health;
                health = 100;

            } else {
                currentHealth = splitted[1];
                health += Number(splitted[1]);

            }
            console.log(`You healed for ${currentHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (splitted[0] === "chest") {
            coins += Number(splitted[1]);
            console.log(`You found ${Number(splitted[1])} bitcoins.`);
        } else {
            health -= Number(splitted[1]);
            if (health > 0) {
                console.log(`You slayed ${splitted[0]}.`);

            } else {
                console.log(`You died! Killed by ${splitted[0]}.`);
                console.log(`Best room: ${room}`);
                dead = true;
                break;
            }
        }
    }
    if (!dead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');


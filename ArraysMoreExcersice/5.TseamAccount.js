// As a gamer, Peter has Tseam Account. He loves to buy new games. 
// You are given Peter's account with all of his games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does with his account.`
// You may receive the following commands:
// •	Install {game}
// •	Uninstall {game}
// •	Update {game}
// •	Expansion {game}-{expansion}
// If you receive Install command, you should add the game at last position in the account, but only if it isn't installed already.
// If you receive Uninstall command, delete the game if it exists.
// If you receive Update command, you should update the game if it exists and place it on last position.
// If you receive Expansion command, you should check if the game exists and insert after it the expansion in the following format:
//  "{game}:{expansion}";
// Input
// •	On the first input line you will receive Peter`s account - sequence of game names, separated by space.
// •	Until you receive "Play!" you will be receiving commands. 
// Output
// •	As output you must print Peter`s Tseam account. 
// Constraints
// •	The command will always be valid.
// •	The game and expansion will be strings and will contain any character, except '-'.
// •	Allowed working time / memory: 100ms / 16MB.


function tseamAccount(arr){
    let games = arr.shift().split(" ");
    let commands = arr.shift().split(" ");
    
     while(commands[0] != "Play!"){
        if(commands[0] === "Install" && games.includes(commands[1]) === false){
            games.push(commands[1]);
        }else if(commands[0] === "Uninstall" && games.includes(commands[1])){
            let index = games.indexOf(commands[1]);
            games.splice(index, 1);
        }else if(commands[0] === "Update" && games.includes(commands[1])){
            let index = games.indexOf(commands[1]);
            games.splice(index, 1);
            games.push(commands[1]);
        }else if(commands[0] === "Expansion"){
            let expansion = commands[1].split("-");
            let game = expansion[0];

            if(games.includes(game)){
                let expandedGame = expansion.join(":");
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame);
            }
        }
        commands = arr.shift().split(" ");
     }

     console.log(games.join(" "));
}


tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
);
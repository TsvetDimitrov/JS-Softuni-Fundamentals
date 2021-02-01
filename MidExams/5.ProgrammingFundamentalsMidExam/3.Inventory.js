// Input / Constraints
// You will receive a journal with some Collecting items, separated with ', ' (comma and space). 
// After that, until receiving "Craft!" you will be receiving different commands. 
// Commands (split by " - "):
// •	"Collect - {item}" – Receiving this command, you should add the given item in your inventory. If the item already exists, 
// you should skip this line.
// •	"Drop - {item}" – You should remove the item from your inventory, if it exists.
// •	"Combine Items - {oldItem}:{newItem}" – You should check if the old item exists, if so, add the new item after the old one. 
// Otherwise, ignore the command.
// •	"Renew – {item}" – If the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", " (comma and space).

function inventory (arr){
    let items = arr.shift().split(", ");
    let commands =  arr.shift().split(" - ");

    while(commands != "Craft!"){
        
        if(commands[0] === "Collect" && items.includes(commands[1]) == false){
            items.push(commands[1]);
        }else if(commands[0] === "Drop" && items.includes(commands[1])){
            let index = items.indexOf(commands[1]);
            items.splice(index, 1);
        }else if(commands[0] === "Combine Items"){
            let combine = commands[1].split(":");
            let item = combine[0];

            if(items.includes(item)){
                let renewed = combine[1];
                let index = items.indexOf(item);
                items.splice(index + 1,0,renewed);
            }
        }else if(commands[0] === "Renew" && items.includes(commands[1])){
            let index = items.indexOf(commands[1]);
            let renewed =  items.splice(index,1);
            items.push(renewed);
        }


        
        commands = arr.shift().split(" - ");
    }
    console.log(items.join(", "));


    
}


inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]
  );
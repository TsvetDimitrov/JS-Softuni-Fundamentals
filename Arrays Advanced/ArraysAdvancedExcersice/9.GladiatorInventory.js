// As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
// You may receive the following commands:
// •	Buy {equipment}
// •	Trash {equipment}
// •	Repair {equipment}
// •	Upgrade {equipment}-{upgrade}
// If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
// If you receive Trash command, delete the equipment if it exists.
// If you receive Repair command, you should repair the equipment if it exists and place it on last position.
// If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";
// Input / Consrtaints
// You will receive an array of strings. Each element of the array is a command.
// •	In the first input element, you will receive Peter's inventory – sequence of equipment names, separated by space.
// Output
// As output you must print Peter's inventory. 
// Constraints
// •	The command will always be valid.
// •	The equipment and Upgrade will be strings and will contain any character, except '-'.
// •	Allowed working time / memory: 100ms / 16MB.


function gladiatorInventory(arr){
    let inventory = arr.shift().split(" ");
    
    for(let i = 0; i < arr.length; i++){
        let commands = arr[i].split(" ");
        let command = commands[0];
        let object = commands[1];

        if(command === "Buy" && inventory.includes(object) === false){
            inventory.push(object);
        }else if(command === "Trash" && inventory.includes(object)){
            let index = inventory.indexOf(object);
            inventory.splice(index, 1);
        }else if(command === "Repair" && inventory.includes(object)){
            let index = inventory.indexOf(object);
            let spliced = inventory.splice(index, 1);
            inventory.push(spliced);
        }else if(command === "Upgrade"){
            object = object.split("-");
            let item = object[0];
            let upgrade = object[1];
            if(inventory.includes(item)){
                let index = inventory.indexOf(item);
                let upgraded = item + ":" +  upgrade;
                inventory.splice(index+1, 0,upgraded);
            }
        }
    }
    console.log(inventory.join(" "));
}




gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']

);

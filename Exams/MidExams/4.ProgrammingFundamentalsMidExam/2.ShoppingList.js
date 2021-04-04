// You will receive an initial list with groceries separated by "!".
// After that you will be receiving 4 types of commands, until you receive "Go Shopping!"
// •	Urgent {item} - add the item at the start of the list.  If the item already exists, skip this command.
// •	Unnecessary {item} - remove the item with the given name, only if it exists in the list. Otherwise skip this command.
// •	Correct {oldItem} {newItem} – if the item with the given old name exists, change its name with the new one. If it doesn't exist, skip this command.
// •	Rearrange {item} - if the grocery exists in the list, remove it from its current position and add it at the end of the list.
// Constraints
// •	There won`t be any duplicate items in the initial list
// Output
// Print the list with all the groceries, joined by ", ".
// •	"{firstGrocery}, {secondGrocery}, …{nthGrocery}"





function shoppingList(arr){
    arr.pop();
    let currentGroceries = arr.shift().split("!");
    
    

    while(arr.length > 0){
        
        let [command, product, newProduct] = arr.shift().split(" ");
        if(command === "Urgent" && currentGroceries.includes(product) == false){
            currentGroceries.unshift(product);
        }else if(command === "Unnecessary" && currentGroceries.includes(product)){
            currentGroceries = currentGroceries.filter(el => el != product)
        }else if(command === "Correct" && currentGroceries.includes(product)){
            let index = currentGroceries.indexOf(product);
            currentGroceries.splice(index, 1, newProduct);
        }else if(command === "Rearrange" && currentGroceries.includes(product)){
            currentGroceries = currentGroceries.filter(el => el != product)
            currentGroceries.push(product)
        }



        
    }

    console.log(currentGroceries.join(", "));
}


shoppingList([`Milk!Pepper!Salt!Water!Banana`,
    `Urgent Salt`,
    `Unnecessary Grapes` ,
    `Correct Pepper Onion`,
    `Rearrange Grapes`,
    `Correct Tomatoes Potatoes`,
    `Go Shopping!`
    ]
    );


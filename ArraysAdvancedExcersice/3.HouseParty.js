// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.


function houseParty(arr){
    let list = [];
    

    for(let i = 0; i < arr.length; i++){
        let line = arr[i].split(" ");
        let name = line[0];
        let command = line[2];

        if(command !== 'not'){
            if(list.includes(name) === true){
                console.log(`${name} is already in the list!`);
                continue;
            }
            list.push(name)
        }else{
            if(list.includes(name) === false){
                console.log(`${name} is not in the list!`);
                continue;
            }

            list = list.filter(x => x != name)
        }
    }
    console.log(list.join('\n'));
}


houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
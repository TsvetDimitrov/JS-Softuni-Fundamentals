



function solve(input){
    let sequence = input[0];
    
    
    
    input.shift();
    
    let [command, stringi, value1, string1, value2] = input.shift().split(" ");
    while(command !=  "end"){
        if(command === "reverse" && value1 >= 0 && value1 <= sequence.length && value1 < value2 && value2 <= sequence.length){
            let spliced = sequence.splice(value1, value2);
            spliced.reverse();
            for (const iterator of spliced) {
                sequence.splice(value1++, 0, iterator);
            }
            //sequence.splice(value1, 0, ...spliced);
            
        }else if(command === "sort" && value1 >= 0 && value1 <= sequence.length && value1 < value2 && value2 <= sequence.length){
            let spliced = sequence.splice(value1, value2);
            spliced.sort();

            sequence.splice(value1, 0, ...spliced);

        }else if(command === "remove"){
            sequence.splice(0, Number(stringi));
        }

        [command, stringi, value1, string1, value2] = input.shift().split(" ");
    }

    console.log(sequence.join(", "));

}



solve(([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
"remove 2",
"end"])


)

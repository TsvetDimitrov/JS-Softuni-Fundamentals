
function task1(input){
    let string = input.shift();

    let line;
    while((line = input.shift()) !== "End"){
        let [command, ...args] = line.split(" ");


        if(command === "Translate"){
            let [char, replacement] = args;
            let regex = new RegExp(char, 'g');
            string = string.replace(regex, replacement);
            console.log(string);
        }else if(command === "Includes"){
            let str = args;
            if(string.includes(str)){
                console.log(`True`);
            }else{
                console.log('False');
            }
        }else if(command === "Start"){
            let str = args.shift();
            let count = str.length;
            let match = string.substring(0, count);

            if(match === str){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(command === "Lowercase"){
            string = string.toLowerCase();
            console.log(string);
        }else if(command === "FindIndex"){
            let char = args;
            let match;
            for(let i = 0; i < string.length; i++){
                if(char[0] === string[i]){
                    match = i;
                }
            }
            console.log(match);
        }else if(command === "Remove"){
            let [startIndex, count] = args;
            startIndex = Number(startIndex);
            count = Number(count);

            let firstPart = string.substring(0, startIndex);
            let secondPart = string.substring(startIndex, count);
            let thirdPart = string.substring(startIndex+count);

            string = firstPart + thirdPart;
            console.log(string);
        }
    }
}



task1(["//Thi5 I5 MY 5trING!//", 
"Translate 5 s", 
"Includes string", 
"Start //This",  // start garmi 
"Lowercase", 
"FindIndex i", 
"Remove 0 10", 
"End"]);



// You are a world traveller and your next goal is to make a world tour. In order to do that, 
// you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
// On the first line you will be given a string containing all of your stops. Until you receive the command "Travel", 
// you will be given some commands to manipulate that initial string. The commands can be:
// •	Add Stop:{index}:{string} – insert the given string at that index only if the index is valid
// •	Remove Stop:{start_index}:{end_index} – remove the elements of the string from the starting index to the end index (inclusive) 
// if both indices are valid
// •	Switch:{old_string}:{new_string} – if the old string is in the initial string, replace it with the new one. (all occurrences)
// Note: After each command print the current state of the string
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
// Input / Constraints
// •	JavaScript: you will receive a list of strings
// Output
// •	Print the proper output messages in the proper cases as described in the problem description


function worldTour(input){
    let stops = input.shift();
    let line;
    while((line = input.shift()) !== "Travel"){
        let [command, ...args] = line.split(":");

        if(command === "Add Stop"){
            let [index, string] = args;
            index = Number(index);

            if(index >= 0 && index <= stops.length){
                let firstPart = stops.substring(0, index);
                
                let thirdPart = stops.substring(index);
                stops = firstPart + string + thirdPart;
            }
        }else if(command === "Remove Stop"){
            let [startIndex, endIndex] = args;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            if(startIndex >= 0 &&  startIndex <= endIndex &&  endIndex < stops.length){
            let firstPart = stops.substring(0, startIndex);
            let secondPart = stops.substring(startIndex, endIndex);
            let thirdPart = stops.substring(endIndex+1);

            stops = firstPart + thirdPart;
            }
        }else if(command === "Switch"){
            let [oldString, newString] = args;

            if(stops.includes(oldString)){
                let regex = new RegExp(oldString, 'g');

                stops = stops.replace(regex, newString);
            }
        }

        console.log(stops);
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}




worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);





function worldTourTEST(input) {
    let stops = input.shift();

    let line;
    while ((line = input.shift()) !== "Travel") {
        [command, ...args] = line.split(":");


        if (command === "Add Stop") {
            let [index, string] = args;
            index = Number(index);
            if (index >= 0 && index <= stops.length) {
                let firstPart = stops.substring(0, index);
                let thirdPart = stops.substring(index);
                stops = firstPart + string + thirdPart;

            }
        } else if (command === "Remove Stop") {
            let [startIndex, endIndex] = args;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && startIndex <= endIndex && endIndex < stops.length) {
                let firstPart = stops.substring(0, startIndex);
                let deleted = stops.substring(startIndex, endIndex);
                let thirdPart = stops.substring(endIndex + 1);
                stops = firstPart + thirdPart;
            }
        } else if (command === "Switch") {
            let [oldString, newString] = args;
            let regex = new RegExp(oldString, 'g');
            stops = stops.replace(regex, newString);
        }
        console.log(stops);
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
function solve(arr){

    let [command, ...string] = arr.shift().split(" ");
    let printMessage = [];
    while(command != "end"){
        if(command === "Chat"){
            printMessage.push(...string);
        }else if(command === "Delete" && printMessage.includes(...string)){
            let index = printMessage.indexOf(...string);
            printMessage.splice(index, 1);
        }else if(command === "Edit"){
            let message = string[0];
            if(printMessage.includes(message)){
                let index = printMessage.indexOf(message);
                printMessage.splice(index, 1, ...string);
            }
        }else if(command === "Pin" && printMessage.includes(...string)){
            let index = printMessage.indexOf(...string);

            let spliced = printMessage.splice(index, 1);

            printMessage.push(spliced);
        }else if(command === "Spam"){
            printMessage.push(...string);
        }



        [command, ...string] = arr.shift(). split(" ");
    }
    console.log(printMessage.join("\n"));
    

}




solve((["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])

)



function chatBot(array) {
    let finalLog = []
    for (const item of array) {
        const cool = item.split(' ')
        const [command, ...message] = cool

        if (command === 'end') {
            break
        } else if (command === 'Chat') {
            finalLog.push(message[0])
        } else if (command === 'Delete') {
            if (finalLog.includes(message[0])) {
                finalLog.splice(finalLog.indexOf(message[0]), 1)
            }
        } else if (command === 'Edit') {
            if (finalLog.includes(message[0])) {
                const editedMessage = finalLog.indexOf(message[0])
                // eslint-disable-next-line prefer-destructuring
                finalLog[editedMessage] = message[1]
            }
        } else if (command === 'Pin') {
            if (finalLog.includes(message[0])) {
                finalLog.splice(finalLog.indexOf(message[0]), 1)
                finalLog.push(message[0])
            }
        } else if (command === 'Spam') {
            finalLog = [...finalLog, ...message]
        }
    }
    console.log(finalLog.join('\n'))
}
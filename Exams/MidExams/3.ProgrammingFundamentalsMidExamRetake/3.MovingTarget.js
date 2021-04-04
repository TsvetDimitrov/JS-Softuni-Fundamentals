// You are at the shooting gallery again and you need a program that helps you keep track of moving targets. 
// On the first line, you will receive a sequence of targets with their integer values, split by a single space. 
// Then, you will start receiving commands for manipulating the targets, until the "End" command. The commands are the following:
// •	Shoot {index} {power}
// o	Shoot the target at the index, if it exists by reducing its value by the given power (integer value).
// A target is considered shot when its value reaches 0.
// o	Remove the target, if it is shot.
// •	Add {index} {value}
// o	Insert a target with the received value at the received index, if it exist. If not, print: "Invalid placement!"
// •	Strike {index} {radius}
// o	Remove the target at the given index and the ones before and after it depending on the radius, if such exist. 
// If any of the indices in the range is invalid print:
// "Strike missed!" and skip this command.
//  Example:  Strike 2 2
// 	{radius}	{radius}	{strikeIndex}	{radius}	{radius}		

// •	End
// o	Print the sequence with targets in the following format:
// {target1}|{target2}…|{targetn}
// Input / Constraints
// •	On the first line you will receive the sequence of targets – integer values [1-10000].
// •	On the next lines, until the "End" will be receiving the command described above – strings.
// •	There will never be a case when "Strike" command would empty the whole sequence.
// Output
// •	Print the appropriate message in case of "Strike" command if necessary.
// •	In the end, print the sequence of targets in the format described above.


function movingTarget(arr){
    let targets = arr.shift().split(" ").map(Number);
    let commands = arr.shift().split(" ");


    while(commands[0] != "End"){
        let command = commands[0];
        let index = Number(commands[1]);
        let valueOfCommand = Number(commands[2]);
        if(command === "Shoot" && !(targets[index] === undefined)){
            targets[index] -= valueOfCommand;
            if(targets[index]<=0){
                targets.splice(index,1);
            }else{
                targets.splice(index,1,targets[index]);
            }
        }else if(command === "Add"){
            if(!(targets[index] === undefined)){
                targets.splice(index,0,valueOfCommand);
            }else{
                console.log("Invalid placement!");
            }
        }else if(command === "Strike"){
            if(!(targets[index] === undefined)){
                if((index + valueOfCommand) <= targets.length-1 && (index-valueOfCommand) >= 0){
                    targets.splice((index-valueOfCommand), (valueOfCommand * 2) +1)
                }else{
                    console.log(`Strike missed!`);
                }
            }
        }



        commands = arr.shift().split(" ");
    }
    console.log(targets.join(`|`));
}


// movingTarget([`52 74 23 44 96 110`,
//     `Shoot 5 10`,
//     `Shoot 1 80`,
//    `Strike 2 1`,
//     `Add 22 3`,
//     `End`]
//     );


//movingTarget([`52 74 23 44 96 110`, `Shoot 5 10`, `End`]);


movingTarget([`1 2 3 4 5`,
    `Strike 0 1`,
    `End`]
    )
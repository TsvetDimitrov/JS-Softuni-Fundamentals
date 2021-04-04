// Write a program that helps you keep track of your shot targets. You will receive a sequence with integers, 
// separated by single space, representing targets and their value. Afterwards, 
// you will be receiving indices until the "End" command is given and you need to print the targets and the count of shot targets.
// Every time you receive an index, you need to shoot the target on that index, if it is possiblie. 
// Everytime you shoot a target, its value becomes -1 and it is considered shot. Along with that you also need to:
// •	Reduce all the other targets, which have greater values than your current target, with its value. 
// •	All the targets, which have less than or equal value to the shot target, you need to increase with its value.
// Keep in mind that you can't shoot a target, which is already shot. You also can't increase or reduce a target, 
// which is considered shot.
// When you receive the "End" command, print the targets in their current state and the count of shot targets in the following format:
// "Shot targets: {count} -> {target1} {target2}… {targetn}"
// Input / Constraints
// •	On the first line of input you will receive a sequence of integers, separated by a single space – the targets sequence.
// •	On the next lines, until the "End" command you be receiving integers each on a single line – the index of the target to be shot.
// Output
// •	The format of the output is described above in the problem description.


function shootForTheWin(arr){
    let targets = arr.shift().split(" ").map(Number);
    let targetsToShoot = arr.slice(0, -1).map(Number);
    


    for (const currentTarget of targetsToShoot) {
        if(targets[currentTarget] !== undefined && targets[currentTarget] !== -1){
            let targetValue = targets[currentTarget];
            targets[currentTarget] = -1;


            targets = targets.map(e => {
                if(e === -1){
                    return e;
                }
                if(e > targetValue){
                    return e - targetValue;
                }
                return e+targetValue;
            } );
        }
    }
    let shootTargets = targets.filter(e => e === -1).length;
 
    console.log(`Shot targets: ${shootTargets} -> ${targets.join(' ')}`);
}


shootForTheWin([`24 50 36 70`,
    `0`,
    `4`,
    `3`,
    `1`,
    `End`]
    );

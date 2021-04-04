function solution2(input){
    input.shift();
    for (const line of input) {
        let regex = /(\*|@)(?<name>[A-Z][a-z]{2,})\1: (\[(?<group1>[A-Za-z])\]\|)(\[(?<group2>[A-Za-z])\]\|)(\[(?<group3>[A-Za-z])\]\|)$/g
        let matches = regex.exec(line);
        if(matches){
            console.log(`${matches.groups.name}: ${matches.groups.group1.charCodeAt()} ${matches.groups.group2.charCodeAt()} ${matches.groups.group3.charCodeAt()}`);
        }else{
            console.log(`Valid message not found!`);
        }
    }
}


// solution2(["3",
// "*Request*: [I]|[s]|[i]|",
// "*Taggy@: [73]|[73]|[73]|",
// "Should be valid @Taggy@: [v]|[a]|[l]|"]);



solution2(["3",
"@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid",
"*tAGged*: [i][i][i]|",
"Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]);

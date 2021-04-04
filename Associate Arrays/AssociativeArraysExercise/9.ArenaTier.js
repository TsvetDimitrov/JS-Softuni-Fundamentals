// Pesho is a pro gladiator, he is struggling to become master of the Arena. 
// You will receive several input lines in one of the following formats:
// "{gladiator} -> {technique} -> {skill}"
// "{gladiator} vs {gladiator}"
// The gladiator and technique are strings, the given skill will be an integer number. 
// You need to keep track of every gladiator. 
// When you receive a gladiator and his technique and skill, add him to the gladiator pool, 
// if he isn't present, else add his technique or update his skill, only if the current technique skill is lower than the new value.
// If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, 
// they duel with the following rules:
// Compare their techniques, if they got at least one in common, 
// the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
// If they don't have techniques in common, the duel isn't happening and both continue in the Season.
// You should end your program when you receive the command "Ave Cesar". 
// At that point you should print the gladiators, ordered by total skill in desecending order, 
// then ordered by name in ascending order. Foreach gladiator print their technique and skill, 
// ordered desecending, then ordered by technique name in ascending order
// Input / Constraints
// You will receive an array of strings as a parameter to your solution.
// •	The input comes in the form of commands in one of the formats specified above.
// •	Gladiator and technique will always be one word string, containing no whitespaces.
// •	Skill will be an integer in the range [0, 1000].
// •	There will be no invalid input lines.
// •	The programm ends when you receive the command "Ave Cesar".

// Output
// •	The output format for each gladiator is:
// "{gladiator}: {totalSkill} skill"
// "- {technique} <!> {skill}"


function arenaTier(input) {
    let obj = {}

    for (const line of input) {
        if (line === "Ave Cesar") {
            break;
        }
        let element = line.split(" ");
        if (element[1] === "->") {
            let theLine = line.split(` -> `);
            let gladiator = theLine[0];
            let technique = theLine[1];
            let skillAmount = Number(theLine[2]);

            if (!obj.hasOwnProperty(gladiator)) {
                obj[gladiator] = {};
            }
            if (!obj[gladiator].hasOwnProperty(technique) || obj[gladiator][technique] < skillAmount) {
                obj[gladiator][technique] = skillAmount;
            }
        } else if (element[1] === "vs") {
            let theLine = line.split(` vs `);
            let gladiator1 = theLine[0];
            let gladiator2 = theLine[1];
            if (obj.hasOwnProperty(gladiator1) && obj.hasOwnProperty(gladiator2)) {
                let gladiator1Techniqe = (obj[gladiator1]);
                let gladiator2Techniqe = (obj[gladiator2]);
                for (const key in gladiator1Techniqe) {
                    if (gladiator2Techniqe.hasOwnProperty(key)) {
                        if (gladiator1Techniqe[key] > gladiator2Techniqe[key]) {
                            delete obj[gladiator2];
                        } else if (gladiator1Techniqe[key] < gladiator2Techniqe[key]) {
                            delete obj[gladiator1];
                        }

                    }
                }
            }
        }
    }
    for (const key in obj) {
        let sum = 0;
        let outsideObj = obj[key];
        for (const insideKey in outsideObj) {
            sum += outsideObj[insideKey];

        }
        outsideObj['sum'] = sum;
    }
   
    Object.entries(obj).sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0])).forEach(element => {
        console.log(`${element[0]}: ${element[1].sum} skill`);
        delete element[1].sum;
        Object.entries(element[1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(element => {
            console.log(` - ${element[0]} <!> ${element[1]}`);
        });
    });
}



arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
);
// On the first line of the standard input you will receive an integer n – the number of heroes that you can choose for your party. On the next n lines, the heroes themselves will follow with their hit points and mana points separated by empty space in the following format: 
// {hero name} {HP} {MP} 
// -	where HP stands for hit points and MP for mana points
// -	a hero can have a maximum of 100 HP and 200 MP
// After you have successfully picked your heroes, you can start playing the game.  You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given. 
// There are several actions that can be performed by the heroes:
// CastSpell – {hero name} – {MP needed} – {spell name} 
// •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
// o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// •	If the hero is unable to cast the spell print:
// o	"{hero name} does not have enough MP to cast {spell name}!"
// TakeDamage – {hero name} – {damage} – {attacker}
// •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
// o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// •	If the hero has died, remove him from your party and print:
// o	"{hero name} has been killed by {attacker}!"
// Recharge – {hero name} – {amount}
// •	The hero increases his MP. If a command is given that would bring the MP of the hero above the maximum value (200), 
// MP is increased to 200. (the MP can’t go over the maximum value).
// •	 Print the following message:
// o	"{hero name} recharged for {amount recovered} MP!"
// Heal – {hero name} – {amount}
// •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), 
// HP is increased to 100 (the HP can’t go over the maximum value).
// •	 Print the following message:
// o	"{hero name} healed for {amount recovered} HP!"
// Input
// •	On the first line of the standard input you will receive an integer n
// •	On the next n lines, the heroes themselves will follow with their hit points and mana points separated by empty space 
// in the following format
// •	You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
// Output
// •	Print all members of your party who are still alive, sorted by their HP in descending order, then by their name in ascending order,
//  in the following format (their HP/MP need to be indented 2 spaces):
// "{hero name}
//  	 HP: {current HP}
//  MP: {current MP}
//  ..."
// Constraints
// •	The starting HP/MP of the heroes will be valid, 32-bit integers, will never be negative or exceed the respective limits.
// •	The HP/MP amounts in the commands will never be negative.
// •	The hero names in the commands will always be valid members of your party. No need to check that explicitly



function heroesOfCodeAndLogic(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [hero, hp, mp] = input.shift().split(" ");
        hp = Number(hp);
        mp = Number(mp);


        if (!heroes.hasOwnProperty(hero)) {
            heroes[hero] = { hp, mp };
        }
    }

    let line;
    while ((line = input.shift()) !== "End") {
        let [command, heroName, ...args] = line.split(" - ");

        if (command === "CastSpell") {
            let [mpNeeded, spellName] = args;
            mpNeeded = Number(mpNeeded);

            if (heroes[heroName].mp >= mpNeeded) {
                heroes[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === "TakeDamage") {
            let [damage, attacker] = args;
            damage = Number(damage);

            heroes[heroName].hp -= damage;

            if (heroes[heroName].hp > 0) {

                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }
        } else if (command === "Recharge") {
            let amount = Number(args);

            let valueRecharged = heroes[heroName].mp + amount > 200 ? 200 - heroes[heroName].mp : amount;
            heroes[heroName].mp += valueRecharged;

            console.log(`${heroName} recharged for ${valueRecharged} MP!`);
        } else if (command === "Heal") {
            let amount = Number(args);
            let valueRecharged = heroes[heroName].hp + amount > 100 ? 100 - heroes[heroName].hp : amount;
            heroes[heroName].hp += valueRecharged;

            console.log(`${heroName} healed for ${valueRecharged} HP!`);
        }
    }

    let sortedHeroes = Object.entries(heroes).sort(sortHeroes);

    for (const hero of sortedHeroes) {
        console.log(hero[0]);
        console.log(`  HP: ${hero[1].hp}`);
        console.log(`  MP: ${hero[1].mp}`);
    }

    function sortHeroes (a, b){
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        let sortedByhpDescending = bInfo.hp - aInfo.hp;

        if(sortedByhpDescending == 0){
            return aName.localeCompare(bName);
        }
        return sortedByhpDescending;
    }
}



heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]);

  //Another solution.

function heroesOfCodeAndLogicTEST(input) {
    heroes = {};
    n = Number(input.shift());
    input.splice(0, n).forEach(line => {
        let [heroName, hp, mp] = line.split(" ");
        hp = Number(hp);
        mp = Number(mp);

        heroes[heroName] = { hp, mp };

    });

    let commandParser = {
        "CastSpell": CastSpell,
        "Recharge": Recharge,
        "TakeDamage": TakeDamage,
        "Heal": Heal
    }
    input.forEach(line => {
        let [command, ...tokens] = line.split(" - ");


        if (command !== "End") {
            let func = commandParser[command];
            console.log(func(heroes, ...tokens)); //Using The object for the functions bellow. 
        }
    });

    let sortedHeroes = Object.entries(heroes).sort(compareHeroes);

    for (let [heroName, heroInfo] of sortedHeroes) {
        let { hp, mp } = heroInfo;

        console.log(heroName);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`)
    };


    function compareHeroes(a, b) {
        let [aHero, aInfo] = a;
        let [bHero, bInfo] = b;
        let byHealthDescending = bInfo.hp - aInfo.hp;

        if (byHealthDescending === 0) {
            return aHero.localeCompare(bHero);
        }
        return byHealthDescending;
    }

    function CastSpell(heroes, heroName, mpNeeded, spellName) {
        let hero = heroes[heroName];
        mpNeeded = Number(mpNeeded);
        if (hero.mp >= mpNeeded) {
            hero.mp -= mpNeeded;
            return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
        }
        return `${heroName} does not have enough MP to cast ${spellName}!`;
    }


    function TakeDamage(heroes, heroName, damage, attacker) {
        let hero = heroes[heroName];
        damage = Number(damage);
        hero.hp -= damage;

        if (hero.hp > 0) {
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
        }

        delete heroes[heroName];
        return `${heroName} has been killed by ${attacker}!`
    }

    function Recharge(heroes, heroName, amount) {
        let hero = heroes[heroName];
        amount = Number(amount);
        let oldValue = hero.mp;

        hero.mp = Math.min(200, hero.mp + amount);

        return `${heroName} recharged for ${hero.mp - oldValue} MP!`;

    }

    function Heal(heroes, heroName, amount) {
        let hero = heroes[heroName];
        amount = Number(amount);
        let oldValue = hero.hp;


        hero.hp = Math.min(100, hero.hp + amount);

        return `${heroName} healed for ${hero.hp - oldValue} HP!`;

    }
}

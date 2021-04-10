// The war is in its peak, but you, young Padawan, can turn the tides with your programming skills. 
// You are tasked to create a program to decrypt the messages of The Order and prevent the death of hundreds of lives. 
// You will receive several messages, which are encrypted using the legendary star enigma. 
// You should decrypt the messages, following these rules:
// To properly decrypt a message, you should count all the letters [s, t, a, r] –
//  case insensitive and remove the count from the current ASCII value of each symbol of the encrypted message.
// After decryption:
// Each message should have a planet name, population, attack type ('A', as attack or 'D', as destruction) and soldier count.
// The planet name starts after '@' and contains only letters from the Latin alphabet. 
// The planet population starts after ':' and is an Integer;
// The attack type may be "A"(attack) or "D"(destruction) and must be surrounded by "!" (exclamation mark).
// The soldier count starts after "->" and should be an Integer.
// The order in the message should be: planet name -> planet population -> attack type -> soldier count. 
// Each part can be separated from the others by any character except: '@', '-', '!', ':' and '>'.
// Input / Constraints
// •	The first line holds n – the number of messages– integer in range [1…100];
// •	On the next n lines, you will be receiving encrypted messages.
// Output
// After decrypting all messages, you should print the decrypted information in the following format:
// First print the attacked planets, then the destroyed planets.
// "Attacked planets: {attackedPlanetsCount}"
// "-> {planetName}"
// "Destroyed planets: {destroyedPlanetsCount}"
// "-> {planetName}"
// The planets should be ordered by name alphabetically.



function starEnigma(input) {
    let n = Number(input.shift());
    let planets = [];
    let patternStar = /[star]/g;

    for (let command of input) {
        let counter = 0;
        let splitArray = command.split("");

        for (let i = 0; i < splitArray.length; i++) {

            let currentChar = splitArray[i].toLowerCase();
            if (currentChar.match(patternStar)) {
                counter++;
            }
        }
        for (let i = 0; i < splitArray.length; i++) {
            let charCode = splitArray[i].charCodeAt(0);

            let result = String.fromCharCode(charCode - counter);
            splitArray[i] = result;

        }

        let finalString = splitArray.join("");
        planets.push(finalString);
    }
    let attackedCount = 0;
    let attackedPlanets = [];
    let destroyedCount = 0;
    let destroyedPlanets = [];
    let patternPlanetMessage = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<command>[A|D])![^@:!\->]*\->(?<soldier>\d+)/g;
    let planetInfo = patternPlanetMessage.exec(planets);
    while (planetInfo !== null) {
        let name = planetInfo.groups['name'];
        let attackCommand = planetInfo.groups['command'];

        switch (attackCommand) {
            case "A":
                attackedCount++
                attackedPlanets.push(name);
                break;

            case "D":
                destroyedCount++;
                destroyedPlanets.push(name);
                break;
        }

        planetInfo = patternPlanetMessage.exec(planets);
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedCount}`);
    if (attackedPlanets.length > 0) {
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedCount}`);
    if (destroyedPlanets.length > 0) {
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
}




starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']
);
// You are a pianist and you like to keep a list of your favorite piano pieces. Create a program, 
// to help you organize it and add, change, remove pieces from it!
// On the first line of the standard input you will receive an integer n – the number of pieces that you will initially have. 
// On the next n lines the pieces themselves will follow with their composer and key, separated by "|" in the following format:
// {piece}|{composer}|{key}
// Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:
// •	Add|{piece}|{composer}|{key} 
// o	You need to add the given piece with the information about it to the other pieces
// o	If the piece is already in the collection, print:
// "{piece} is already in the collection!"
// o	If the piece is not in the collection, print: 
// "{piece} by {composer} in {key} added to the collection!"
// •	Remove|{piece}
// o	If the piece is in the collection, remove it and print:
// "Successfully removed {piece}!"
// o	If the piece is not in the collection, print:
// "Invalid operation! {piece} does not exist in the collection."
// •	ChangeKey|{piece}|{new key}
// o	If the piece is in the collection, change its key with the given one and print:
// "Changed the key of {piece} to {new key}!"
// o	If the piece is not in the collection, print:
// "Invalid operation! {piece} does not exist in the collection."
// Upon receiving the "Stop" command you need to print all pieces in your collection, sorted by their name and by 
// the name of their composer in alphabetical order, in the following format:
// "{Piece} -> Composer: {composer}, Key: {key}"
// Input/Constraints
// •	You will receive a single integer at first – the initial number of pieces in the collection
// •	For each piece you will receive a single line of text with information about it.
// •	Then you will receive multiple commands in the way described above, until the command "Stop".
// Output
// •	All the output messages with the appropriate formats are described in the problem description.


function thePianist(input) {


    let pieces = {};
    input.splice(0, Number(input.shift())).forEach((element) => {
        let [piece, composer, key] = element.split("|");

        pieces[piece] = { composer, key };
    });

    let line;
    while ((line = input.shift()) !== "Stop") {
        let [command, piece, ...args] = line.split("|");

        if (command === "Add") {
            let [composer, key] = args;
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === "Remove") {
            if (!pieces.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            }
        } else if (command === "ChangeKey") {
            let newKey = args;
            if (!pieces.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
    }

    let sorted = Object.entries(pieces).sort(sortAlphabetical);

    for (let piece of sorted) {
        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);
    }

    function sortAlphabetical(a, b) {
        let [aPiece, aInfo] = a;
        let [bPiece, bInfo] = b;

        let nameSorted = aPiece.localeCompare(bPiece);

        if (nameSorted === 0) {
            return aInfo.composer.localeCompare(bInfo.composer);
        }
        return nameSorted;
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);

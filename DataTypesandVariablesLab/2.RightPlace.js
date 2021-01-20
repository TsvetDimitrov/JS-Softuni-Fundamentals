// You will receive 3 parameters (string, char, string).
// First string will be a word with a missing char replaced with a underscore '_'
// You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string.
// If they are equals you should print "Matched", otherwise print "Not Matched".
function solve(string, char, result){
let matched = string.replace('_', char);
matched === result ? console.log("Matched") : console.log("Not Matched");
}

solve('Str_ng', 'i', 'String');
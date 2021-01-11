function charsInRage(firstSymbol, secondSymbol){
let firstCode = firstSymbol.charCodeAt(0);
let secondCode = secondSymbol.charCodeAt(0);
let result = '';
if(firstCode > secondCode){
    firstCode = secondCode;
    if(firstCode == secondCode){
        secondCode = firstSymbol.charCodeAt(0);
    }
    
}

for(let i = firstCode + 1; i<secondCode ; i++ ){
        result += String.fromCharCode(i) + " ";
}

return result;

}

//console.log(charsInRage('a', 'd'))
console.log(charsInRage('C', '#'))
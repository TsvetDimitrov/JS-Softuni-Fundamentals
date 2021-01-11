function smallestOfThree(a,b,c){
let smallNum = Number.MAX_SAFE_INTEGER;
smallNum = smallest(a, smallNum);
smallNum = smallest(b, smallNum);
smallNum =smallest(c, smallNum);

function smallest(x,smallNum){
    if(x<smallNum){
        smallNum = x;
        
    }
    return x< smallNum ? x : smallNum;
}
return smallNum;

}



console.log(smallestOfThree(2,5,3));
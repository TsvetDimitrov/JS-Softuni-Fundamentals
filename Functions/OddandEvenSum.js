function oddAndEvenSum(number){
newNum = String(number).split("");
let oddSum = 0;
let evenSum = 0;

for(let i = 0; i<newNum.length; i++){
    const num = Number(newNum[i]);
    if(num % 2 == 0){
        evenSum +=num;
    }else{
        oddSum += num;
    }
}

return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}



console.log(oddAndEvenSum(1000435));
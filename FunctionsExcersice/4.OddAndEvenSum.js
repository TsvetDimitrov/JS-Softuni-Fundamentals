// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 


function oddAndEvenSum(n) {
    let arr = String(n).split("");
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}


console.log(oddAndEvenSum(3495892137259234));
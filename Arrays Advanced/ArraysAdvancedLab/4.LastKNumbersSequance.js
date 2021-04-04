// You are given two integers n and k. Write a function that generates and prints the following sequence:
// •	The first element is 1.
// •	Every following element equals the sum of the previous k elements.
// •	The length of the sequence is n elements.
	
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is printed on the console on a single line, separated by space.


function lastKNumbersSequance(n, k){    
    let newArr = [1];
    let sumNumbers = 0;

    for(let i = 0;i < n-1; i++){
        let sum = newArr.slice(-k);
        for (const iterator of sum) {
            sumNumbers += Number(iterator);
        }
        newArr.push(sumNumbers);
        sumNumbers = 0;
    }
    console.log(newArr.join(" "));

}

lastKNumbersSequance(8, 2);
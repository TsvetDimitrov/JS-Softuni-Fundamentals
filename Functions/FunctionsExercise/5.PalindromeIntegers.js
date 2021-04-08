// A palindrome is a number which reads the same backward as forward, such as 323 or 1001. 
// Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.

function polindromeIntegers(arr) {

    let result = '';
    for (let num of arr) {
        let isPolyndrome = true;
        num = String(num);
        for (let i = 0; i < num.length / 2; i++) {
            if (num[i] !== num[num.length - i - 1]) {
                isPolyndrome = false;
                break;
            }
        }
        result += isPolyndrome + "\n";

    }
    return result;
}





console.log(polindromeIntegers([32, 2, 232, 1010]));
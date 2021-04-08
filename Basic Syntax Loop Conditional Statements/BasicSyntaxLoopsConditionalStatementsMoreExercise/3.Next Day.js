// Write a JS function that calculates the date of the next day by given year, month and day.
// The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.
// The output should be returned as a result of your function.

function solve(year, month, day){

let date = new Date(year, month-1, day);
let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1)
        +  '-' + nextDate.getDate();


}


console.log(solve(2016, 9, 30));
// Every day thousands of students pass by the reception at SoftUni with different questions to ask and 
// the employees have to help everyone by providing all the information and to answer all of the questions. 
// There are 3 employees working on the reception all day. Each of them can handle different number of students per hour. 
// Your task is to calculate how much time it will take to answer all the questions of given number of students.
// First you will receive 3 lines with integers, representing count of students that each of the employee can help per hour. 
// On the next line you will receive students count as a single integer. 
// Every forth hour all of the employees have a break, so they don’t work for a hour. 
// This is the only break for the employees, because they don`t need rest, nor have a personal life. 
// Calculate the time needed to answer all the student's questions and print it in the following format: "Time needed: {time}h."
// Input / Constraints
// •	On first three lines -  each employee efficiency -  integer in range [1 - 100]
// •	On the fourth line - students count – integer in range [0 – 10000]
// •	Input will always be valid and in the range specified
// Output
// •	Print a single line: "Time needed: {time}h."
// •	Allowed working time / memory: 100ms / 16MB



function softUniReception(arr){
    let firstWorker = Number(arr.shift());
    let secondWorker = Number(arr.shift());
    let thirdWorker = Number(arr.shift());
    let allWorkersEfficiency = firstWorker + secondWorker + thirdWorker;
    let hour = 0;
    let work = Number(arr.shift());

    while(work > 0){
        hour++
        if(hour % 4 != 0){
            work -= allWorkersEfficiency;
        }
    }
    console.log(`Time needed: ${hour}h.`);

}



softUniReception(['1','2','3','45']
    );
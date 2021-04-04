// In this problem you have to arrange all students by grade. 
// You as the secretary of the school principal will process students and store them into a school register before 
// the new school year hits. As a draft, you have a list of all the students from last year but mixed. 
// Кeep in mind that if a student has a lower grade than 3, he does not go into the next class. 
// As result of your work, you have to print the entire school register sorted in ascending order 
// by grade already filled with all the students from last year in format:
// {nextGrade} Grade
// List of students: {All students in that grade}
// Average annual grade from last year: {average annual grade on the entire class from last year}
// And empty row {console.log}
// The input will be array with strings, each containing a student's name, last year's grade, 
// and an annual grade. The average annual grade from last year should be formatted to the second decimal point.

function schoolRegister(arr){
    let studentsRegister = {}

    for (let line of arr) {
        let tokens = line.split(", ");
        let name = tokens[0].split(": ")[1];
        let grade = Number(tokens[1].split(": ")[1]) + 1;
        let score = Number(tokens[2].split(": ")[1]);

        if(score > 3){
            let student = {name, score}

            if(!studentsRegister.hasOwnProperty(grade)){
                studentsRegister[grade] = [];
            }
            studentsRegister[grade].push(student);
        }
    }

    let sorted = Object.keys(studentsRegister).sort((a, b) => a - b);

    for (let grade of sorted) {
        let students = studentsRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(", ")}`);
        console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }



    function average(arr){
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}




schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]
);




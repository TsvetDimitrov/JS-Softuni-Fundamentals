// Create a program that calculates bonus points for each student, for a certain course. On the first line, 
// you are going to receive the count of the students for this course. On the second line, 
// you will receive the count of the lectures in the course. Every course has an additional bonus. 
// You are going to receive it on the third line. On the next lines, you will be receiving the count of attendances for each student. 
// The bonus is calculated with the following formula:
// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
// Find the student with the maximum bonus and print him/her, along with his attendances in the following format:
// "Max Bonus: {maxBonusPoints}."
// "The student has attended {studentAttendances} lectures."
// Round the bonus points at the end to the nearest bigger number.
// Input / Constrains
// •	On the first line you are going to receive the count of the students – an integer number in the range [0…50]
// •	On the second line you are going to receive the count of the lectures – an integer number in the range [0...50].
// •	On the third line you are going to receive the initial bonus – an integer number in the range [0….100].
// •	On the next lines, you will be receiving the attendances of each student.
// •	There will never be students with equal bonuses.
// Output
// •	Print the maximum bonus points along with the attendances of the given student, rounded 


function bonusScoringSystem(arr){

    let stundents = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let initialBonus = Number(arr.shift());
    let totalBonus = 0;
    let max = 0;
    let attendetLectures = 0;

    for(let i =0; i<stundents; i++){ // We can rotate untill i<arr.length, because we used shift() function. 
        totalBonus = Math.ceil((Number(arr[i]) / lecturesCount) * (5+initialBonus));

        if(max<=totalBonus){
            max = totalBonus;
            attendetLectures = Number(arr[i]);
        }
    }

    console.log(`Max Bonus: ${max}.`);
    console.log(`The student has attended ${attendetLectures} lectures.`);

}



bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
  
  
  );
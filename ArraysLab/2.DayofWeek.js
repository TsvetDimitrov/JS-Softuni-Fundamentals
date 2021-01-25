// Write a program which receives a number and prints the corresponding name of the day of week. 
// If the number is NOT a valid day, print 'Invalid day!'.

function dayOfWeek(day){
let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if(day == 1){
    console.log(dayOfWeek[0]);
}else if(day == 2){
    console.log(dayOfWeek[1]);
}else if(day == 3){
    console.log(dayOfWeek[2]);
}else if(day == 4){
    console.log(dayOfWeek[3]);
}else if(day == 5){
    console.log(dayOfWeek[4]);
}else if(day == 6){
    console.log(dayOfWeek[5]);
}else if(day == 7){
    console.log(dayOfWeek[6]);
}else{
    console.log("Invalid day!");
}

}


dayOfWeek(6);

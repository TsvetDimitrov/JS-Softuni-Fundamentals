// Write a function that manages meeting appointments. The input comes as an array of strings. 
// Each string contains a weekday and person’s name. For each successful meeting, print a message. 
// If you receive the same weekday twice, the meeting cannot be scheduled so print a conflict message. 
// At the end print a list of all successful meetings. See example for message format and details.


function meetings(input){
    let meetings = {
        
    };
    for(let line of input) {
         let[weekDay, name] = line.split(" ");
         
         if(meetings.hasOwnProperty(weekDay)){
             console.log(`Conflict on ${weekDay}!`);
         }else{
             meetings[weekDay] = name;
             console.log(`Scheduled for ${weekDay}`)
         }
    }


    for(let element in meetings){
        console.log(`${element} -> ${meetings[element]}`);
    }


}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
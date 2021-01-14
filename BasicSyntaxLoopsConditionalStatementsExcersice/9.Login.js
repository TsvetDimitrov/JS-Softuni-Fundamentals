// You will be given a string representing a username. The password will be that username reversed. 
// Until you receive the correct password print on the console "Incorrect password. Try again.". 
// When you receive the correct password print "User {username} logged in." 
// However on the fourth try if the password is still not correct print "User {username} blocked!" and end the program. 
// The input comes as an array of strings.


function solve(input){
let user = input.shift();
let counter = 0;

let matcher = function (word){
let splitted = word.split("");
let reversed = splitted.reverse().join('');
return reversed;
}

for(let i = 0; i<input.length; i++){
 if(user == matcher(input[i])){
     console.log(`User ${user} logged in.`);
     break;
 }else{
     console.log("Incorrect password. Try again.");
     counter++;
 }
 if(counter === 3){
     console.log(`User ${user} blocked!`);
     break;
 }

    
}
}



solve(['Acer','login','go','let me in','recA']);
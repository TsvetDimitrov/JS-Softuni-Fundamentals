// You will receive a string with even integers, separated by a "@". This is our neighborhood. 
// After that a series of Jump commands will follow, until you receive "Love!" Every house in the neighborhood needs a certain 
// number of hearts delivered by Cupid, in order to be able to celebrate Valentine’s Day. 
// Those needed hearts are indicated by the integers in the neighborhood.
// Cupid starts at the position of the first house (index 0) and must jump by a given length. The jump commands will be in this format: 
// "Jump {length}". 
// Every time he jumps from one house to another, the needed hearts for the visited house are decreased by 2. 
// If the needed hearts for a certain house become equal to 0 , print on the console "Place {houseIndex} has Valentine's day." 
// If Cupid jumps to a house where the needed hearts are already 0, print on the console "Place {houseIndex} already had Valentine's day.".
// Keep in mind that Cupid can have a bigger jump length than the size of the neighborhood and if he does jump outside of it, 
// he should start from the first house again. 
// For example, we are given this neighborhood: 6@6@6. Cupid is at the start and jumps with a length of 2. 
// He will end up at index 2 and decrease the needed hearts there by 2: [6, 6, 4]. 
// Next he jumps again with a length of 2 and goes outside the neighborhood, so he goes back to the first house (index 0) and 
// again decreases the needed hearts there: [4, 6, 4].
// Input
// •	On the first line you will receive a string with even integers separated by "@" – the neighborhood and the number 
// of hearts for each house.
// •	On the next lines, until "Love!" is received, you will be getting jump commands in this format: "Jump {length}".
// Output
// At the end print Cupid's last position and whether his mission was successful or not:
// •	"Cupid's last position was {lastPositionIndex}."
// •	If each house has had a Valentine's day, print: 
// o	"Mission was successful."
// •	If not, print the count of all houses that didn`t celebrate a Valentine's Day:
// o	"Cupid has failed {houseCount} places."
// Constraints
// •	The neighborhood`s size will be in the range [1…20]
// •	Each house will need an even number of hearts in the range [2 … 10]
// •	Each jump length will be an integer in the range [1 … 20]



function heartDelivery(input = []) {
    let houses = input.shift().split('@').map(Number);
    let commands = input.shift();
   
    let currentIndex = 0;
   
    while (commands !== 'Love!') {
      let tokens = commands.split(' ');
      let jumpLength = +tokens[1];
   
      currentIndex += jumpLength;
   
      if (currentIndex >= houses.length) {
        currentIndex = 0;
      }
   
      if (houses[currentIndex] === 0) {
        console.log(`Place ${currentIndex} already had Valentine's day.`);
      } else {
        houses[currentIndex] -= 2;
        if (houses[currentIndex] === 0) {
          console.log(`Place ${currentIndex} has Valentine's day.`);
        }
      }
   
      commands = input.shift();
    }
   
    console.log(`Cupid's last position was ${currentIndex}.`);
   
    let isSuccess = true;
    let count = 0;
   
    for (const house of houses) {
      if (house !== 0) {
        isSuccess = false;
        count++;
      }
    }
   
    if (isSuccess) {
      console.log(`Mission was successful.`);
    } else {
      console.log(`Cupid has failed ${count} places.`);
    }
  }



heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
   "Love!"]
    )
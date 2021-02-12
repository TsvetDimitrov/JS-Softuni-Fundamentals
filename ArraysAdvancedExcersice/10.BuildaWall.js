// Write a program that keeps track of the construction of a 30-foot wall. 
// You will be given an array of strings that must be parsed as numbers, 
// representing the initial height of mile-long sections of the wall, in feet. 
// Each section has its own construction crew that can add 1 foot of height per day by using 195 cubic yards of concrete. 
// All crews work simultaneously (see examples), meaning all sections that
//  aren't completed (are less than 30 feet high) grow by 1 foot every day. When a section of the wall is complete, its crew is relieved. 
// Your program needs to keep track of how much concrete is used daily until the completion of the entire wall. At the end, 
// print on a single line, separated by comma and space, the amount of concrete used each day, and on a second line, the final cost of the wall. One cubic yard of concrete costs 1900 pesos. 
// Input 
// Your program will receive an array of strings representing numbers as a parameter. 
// Output 
// Print on the console on one line the amount of concrete used each day separated by comma and space, and on a second line, 
// the final cost of the wall. 
// Constraints 
// On the first day, all three crews work, each adding 1 foot to their section, 585 cubic yards total (3 x 195). 
// On the second day, it's the same with the last section reaching 30 feet and its crew being relieved (marked in red while they don't work).
// On the third day, only two crews work, using up 390 cubic yards total. 
// This continues for 2 more days, with the second section reaching 30 feet. In the remaining 4 days, 
// only 1 crew works, using 195 cubic yards every day. Over the entire period, 3120 cubic yards of concrete were used, 
// costing 5'928'000 pesos. And that was for just 3 miles, imagine 2000! 


function buildAWall(arr){
    let totalConcrete = 0;
    let crews = arr.filter(len => len < 30).length; //i use filter because we may have 30/30 at the input and we don't need them. 
    let dailyConcrete = [];
    let costs = 0;
    while(crews !== 0){
        let concreteByAllCrews = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== 30){
                arr[i] += 1;    
                concreteByAllCrews += 195;
                if(arr[i] === 30){
                    crews--;
                }
            }
        }
        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }
    costs = totalConcrete * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}



buildAWall([21, 25, 28]);
// Write a function that calculates a triangle’s area by its 3 sides.
// The input comes as three number arguments, representing one side of a triangle.
// The output should be printed to the console.



function triangleArea(a,b,c){
let semiParameter = (a+b+c)/2;
let area = Math.sqrt(semiParameter*(semiParameter-a)*(semiParameter-b)*(semiParameter-c));
console.log(area);

}

triangleArea(2, 3.5, 4);
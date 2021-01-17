// Write a JS function that calculates the distance between two points by given x and y coordinates. 
// The input comes as four number elements in the format x1, y1, x2, y2. 
// Each pair of elements are the coordinates of a point in 2D space.
// The output should be returned as a result of your function.


function solve(x1,y1,x2,y2){


    let result = Math.sqrt((x2-Math.pow(x1,2)) + (y2 - Math.pow(y1, 2)));


    console.log(result);
}



solve(2, 4, 5, 0);

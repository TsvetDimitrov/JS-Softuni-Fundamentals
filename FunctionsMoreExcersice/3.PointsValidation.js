// Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances 
// between each point and the start of the cartesian coordinate system (0, 0) and between the points themselves is valid. 
// A distance between two points is considered valid, if it is an integer value. 
// In case a distance is valid write "{x1, y1} to {x2, y2} is valid", 
// in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid". 
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
// The input consists of two points given as an array of numbers.
// For each comparison print on the output either "{x1, y1} to {x2, y2} is valid" if the distance between them is valid, 
// or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.


function pointsInValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let checkFirstPoint = firstPoint(arr);
    let checkSecondPoint = secondPoint(arr);
    let checkThirdPoint = thirdPoint(arr);


    function firstPoint() {
        let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

        return checkOne;
    }

    function secondPoint() {
        let checkSecond = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

        return checkSecond;
    }


    function thirdPoint() {
        let checkThird = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));


        return checkThird;
    }


    if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

pointsInValidation([3, 0, 0, 4]);
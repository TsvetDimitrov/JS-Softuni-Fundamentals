function rotateArray(arr, num){
    let temp = 0;
    for(let i = 0; i<num; i++){
        temp = arr.shift([i]);
        arr.push(temp);
    }
    console.log(arr.join(" "));
}


rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);
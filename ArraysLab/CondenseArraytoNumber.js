function sumAll(nums) {
    

    while (nums.length > 1) {
        let condensed = [nums.length - 1];
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1];
            
            
        }
        
        nums = condensed;
    }
    console.log(nums[0]);
}

/*
function sumAll(nums) {
    while (nums.length > 1) {
        let condensed = Array(nums.length-1);
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(nums[0])
}
*/

sumAll([2, 10, 3]);
sumAll([5, 0, 4, 1, 2]);
sumAll([1]);
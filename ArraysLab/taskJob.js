function buzzFizz(n){
    for(let i = 0; i<n.length-1; i++){
        if(n[i]% 3 == 0 && n[i]% 5 == 0){
            console.log("FizzBuzz");
        }else if(n[i] % 3 == 0){
            console.log("Fizz");
        }else if(n[i] % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(n[i]);
        }
    }


}

buzzFizz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
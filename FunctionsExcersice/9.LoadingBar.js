// You will receive a single number between 0 and 100 which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualize a loading bar depending on that number you have received in the input.


function loadingBar(number){

  

    
        let index = number/10;
        let procentLoader = '..........';
        let procentArr = procentLoader.split("")

        
    

    if(number == 100){
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }else{
        for(let i = 0; i<index; i++){
            procentArr.pop();
            procentArr.unshift("%");
        }

        console.log(`${number}% [${procentArr.join("")}]`);
        console.log(`Still loading...`);
    }
    
    

}


loadingBar(30);

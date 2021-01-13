// ['a', 'b', 'c', 'd', 'e']	        e d c b a 	            The first element should be last, and the last element should be first.
// ['abc', 'def', 'hig', 'klm', 'nop']	nop klm hig def abc	
// ['33', '123', '0', 'dd']	            dd 0 123 33	


function swapChars(input){
    lastIndex = input.length-1;
    for(let i = 0; i<input.length/2; i++){
    let temp = input[i];
    input[i] = input[lastIndex - i];
    input[lastIndex-i] = temp;
    }
    console.log(input.join(" "));
}

swapChars(['a', 'b', 'c', 'd', 'e']);
swapChars(['abc', 'def', 'hig', 'klm', 'nop']);
swapChars(['33', '123', '0', 'dd']);
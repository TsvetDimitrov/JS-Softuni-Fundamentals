



function productSupermarket(arr){
    let listProducts = arr.shift().split("|");

    let [command, product1, product2] = arr.shift().split("%");


    while(command !== "Shop!"){
        if(command === "Important"){
            if(listProducts.includes(product1)){
                let index = listProducts.indexOf(product1);
                let spliced = listProducts.splice(index, 1);
                listProducts.unshift(spliced);
            }else{
                listProducts.unshift(product1);
            }
        }else if(command === "Add"){
            if(listProducts.includes(product1) == false){
                listProducts.push(product1);
            }else{
                console.log(`The product is already in the list.`)
            }
        }else if(command === "Swap" ){
            if(listProducts.includes(product1) && listProducts.includes(product2)){
                let index1 = listProducts.indexOf(product1);
                let index2 = listProducts.indexOf(product2);
                let curr = listProducts[index1];
                listProducts[index1] = listProducts[index2];
                listProducts[index2] = curr;
            }else{
                if(listProducts.includes(product1) == false){
                    console.log(`Product ${product1} missing!`);
                }else{
                    console.log(`Product ${product2} missing!`);
                }
            }
           
        }else if(command === "Remove"){
            if(listProducts.includes(product1)){
                let index = listProducts.indexOf(product1);
                listProducts.splice(index,1);
            }else{
                console.log(`Product ${product1} isn't in the list.`);
            }
        }
        [command, product1, product2] = arr.shift().split("%");
    }


    for(let i = 0; i < listProducts.length; i++){
        console.log(`${i+1}. ${listProducts[i]}`);
    }
}



productSupermarket((["apple|cheese|salt|bananas",
"Remove%cheese",
"Swap%salt%bananas",
"Shop!"])

);
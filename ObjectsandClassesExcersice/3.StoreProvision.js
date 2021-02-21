// You will receive two arrays. The first array represents a current stock of the local store. 
// The second array will contain products which the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and on every odd index will hold the quantity of that product. 
// The second array could contain products that are already in the local store. 
// If that happens increase the quantity for the given product .You should store them into an object, 
// and print them in the following format: (product -> quantity)
// All of the arrays values will be strings.



function storeProvision(stock, order){
    let shop = {

    }

    for(let i = 0; i < stock.length; i+=2){
        const element = stock[i];
        
        shop[element] = Number(stock[i+1]);
    }


    for(let i = 0; i < order.length; i+=2){
        const element = order[i];
        if(shop.hasOwnProperty(element)){
            shop[element] += Number(order[i+1]);
        }else{
            shop[element] = Number(order[i+1]);
        }
    }

    for (const key in shop) {
        console.log(`${key} -> ${shop[key]}`);
    }
}



storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );

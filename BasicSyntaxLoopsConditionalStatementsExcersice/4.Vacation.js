// You are given a group of people, type of the group, and day of the week they are going to stay. 
// Based on that information calculate how much they have to pay and print that price on the console. Use the table below. 
// In each cell is the price for a single person. The output should look like that:
//  "Total price: {price}". The price should be formatted to the second decimal point.
// 	Friday	Saturday	Sunday
// Students	8.45	9.80	10.46
// Business	10.90	15.60	16
// Regular	15	20	22.50


// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
// ·	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
// You should reduce the prices in that EXACT order
function solve(groupOfPeople, typeOfGroup, dayOfWeek){

    let totalPrice = 0; 

    if(typeOfGroup === "Business" && groupOfPeople >= 100){
        groupOfPeople -= 10;
    }
    if(typeOfGroup === "Students"){
        if(dayOfWeek === "Friday"){
            totalPrice = groupOfPeople * 8.45;
        }else if(dayOfWeek === "Saturday"){
            totalPrice = groupOfPeople * 9.80;
        }else if(dayOfWeek === "Sunday"){
            totalPrice = groupOfPeople * 10.46;
        }
    }else if(typeOfGroup === "Business"){
        if(dayOfWeek === "Friday"){
            totalPrice = groupOfPeople * 10.90;
        }else if(dayOfWeek === "Saturday"){
            totalPrice = groupOfPeople * 15.60;
        }else if(dayOfWeek === "Sunday"){
            totalPrice = groupOfPeople * 16;
        }
    }else if(typeOfGroup === "Regular"){
        if(dayOfWeek === "Friday"){
            totalPrice = groupOfPeople * 15;
        }else if(dayOfWeek === "Saturday"){
            totalPrice = groupOfPeople * 20;
        }else if(dayOfWeek === "Sunday"){
            totalPrice = groupOfPeople * 22.5;
        }

    
}
if(groupOfPeople >= 30 && typeOfGroup === "Students"){
    let discount = totalPrice * 0.15;
    totalPrice -= discount;
}else if(groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfGroup === "Regular"){
    let discount = totalPrice * 0.05;
    totalPrice -= discount;
}
console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
solve(100, "Business", "Friday");

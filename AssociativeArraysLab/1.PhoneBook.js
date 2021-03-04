// Write a function that stores information about a person’s name and his phone number. The input comes as an array of strings. 
// Each string contains the name and the number. If you receive the same name twice just replace the number.
// At the end print the result without sorting it.Try using an associative array.
function phoneBook(input){
    let phoneBook = {

    }

    for (let element of input) {
        let singleRow = element.split(" ");
        let name = singleRow[0];
        let number = singleRow[1];

        phoneBook[name] = number;
    }
    for(let element in phoneBook){
        console.log(`${element} -> ${phoneBook[element]}`);
    }

   
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);
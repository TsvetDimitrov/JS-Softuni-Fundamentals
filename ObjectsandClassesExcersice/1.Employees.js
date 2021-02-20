// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. 
// Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 

function employees(input){

        for (const iterator of input) {
            let obj = {
                name: iterator,
                id: iterator.length
            }
            console.log(`Name: ${obj.name} -- Personal Number: ${obj.id}`);
        }     
}


employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );

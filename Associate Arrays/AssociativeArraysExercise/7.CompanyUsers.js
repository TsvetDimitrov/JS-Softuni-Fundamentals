// Write a function which keeps information about companies and their employees. 
// You will receive array of strings containing company name and employee's id. 
// Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by the name in ascending order. 
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}
// Input / Constraints
// •	The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// •	The input always will be valid.


function companyUsers(input) {
    let companies = {}


    for (let i = 0; i < input.length; i++) {
        let [company, id] = input[i].split(" -> ");

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }

    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));


    for (const elem of sorted) {
        console.log(elem[0]);
        let set = new Set(elem[1]);

        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}



companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
);

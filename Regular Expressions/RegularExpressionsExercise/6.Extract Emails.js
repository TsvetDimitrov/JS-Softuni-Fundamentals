// Write a function to extract all email addresses from a given text. The text comes at the only input line.
//  Print the emails on the console, each at a separate line. Emails are considered to be in format <user>@<host>, where: 
// •	<user> is a sequence of letters and digits, where '.', '-' and '_' can appear between them.
// o	Examples of valid users: "stephan", "mike03", "s.johnson", "st_steward", "softuni-bulgaria", "12345".
// o	Examples of invalid users: ''--123", ".....", "nakov_-", "_steve", ".info". 
// •	<host> is a sequence of at least two words, separated by dots '.'. Each word is sequence of letters and can have hyphens '-' 
// between the letters.
// o	Examples of hosts: "softuni.bg", "software-university.com", "intoprogramming.info", "mail.softuni.org". 
// o	Examples of invalid hosts: "helloworld", ".unknown.soft.", "invalid-host-", "invalid-". 
// •	Examples of valid emails: info@softuni-bulgaria.org, kiki@hotmail.co.uk, no-reply@github.com, s.peterson@mail.uu.net, 
// info-bg@software-university.software.academy. 
// •	Examples of invalid emails: --123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft.,
//  s.johnson@invalid-.


function extractEmails(input){


    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g;
    
    let line;
    while((line = input.shift()) !== "end"){
        let matches = pattern.exec(line);
        console.log(matches);
    }



}


extractEmails([ 'Please contact us at: support@github.com.', 'end' ]);
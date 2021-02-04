// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consists only of letters and digits
// •	It should have at least 2 digits 
// If a password is valid print "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"


function passwordValidator(password) {
    let charactersNum = true;
    let atLeastTwoDigits = false;
    let onlyLettersAndDigits = true;
    let digitCounter = 0;

    if (password.length < 6 || password.length > 10) {
        console.log(`Password must be between 6 and 10 characters`);
        charactersNum = false;
    }

    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
            digitCounter++;
            if (digitCounter >= 2) {
                atLeastTwoDigits = true;
            }
        } else if (password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90 || password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122) {
            continue;
        } else {
            onlyLettersAndDigits = false;
        }


    }


    if (charactersNum && atLeastTwoDigits && onlyLettersAndDigits) {
        console.log("Password is valid");
    } else if (!onlyLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    } if (!atLeastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}


passwordValidator('Pa$s$s');

function passwordValidator(string){

function isValidLength(string){
    if(string.length >= 6 && string.length <= 10){
        return true;
    }else {
        return "Password must be between 6 and 10 characters";
    }
}

function isValidChars(string){
    let isValidPass = true;
    for(let i = 0; i< string.length; i++){
        let isValid = true;
        let code = string[i].charCodeAt(0);
        if(code >= 65 && code <= 90 ||
            code >= 97 && code <=122 ||
            code >= 48 && code <= 57){
                isValid =true;
                isValidPass = true;
            }else{
                isValid = false;
                isValidPass = false;
                break;
            }
    }
    return isValidPass ? true : `Password must consist only of letters and digits`;
}

function haveNumbers(string){
    let digits =0;
    for(let i = 0; i<string.length; i++){
        let code = string[i].charCodeAt(0);
        if(code >= 48 && code <= 57){
            digits++;
        }
    }
    return digits >= 2 ? true : `Password must have at least 2 digits`;
}

let result = [];

if(isValidLength(string) !== true){
    result.push(isValidLength(string));
}
if(isValidChars(string) !== true){
    result.push(isValidChars(string));
}
if(haveNumbers(string) !== true){
    result.push(haveNumbers(string));
}
if(isValidChars(string) === true && isValidLength(string) === true && haveNumbers(string) === true){
    result.push('Password is valid');
}

return result.join("\n");

}


console.log(passwordValidator('Pa$s$s'));

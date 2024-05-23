const lowerAlpha="abcdefghijklmnopqrstuvwxyz";
const upperAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const extraSymbols="\.\!\@\#\$\%\^\&\*\(\)\/\-\_";
const buttonUser = document.getElementById("generateButton");
const output = document.getElementById("output");


function generatePassword(passSize) {
    randArr = [lowerAlpha, extraSymbols, numbers, upperAlpha];
    password='';
    randArrNum = 0;
    for (let index = 0; index < passSize; index++) {
        randArrNum = Math.round(Math.random() * (randArr.length - 1));
        password += getRandomChar(randArr[randArrNum]);
    }
    //password.join("")
    output.value = password;
}

//randomly picks a element from one of the strings
//probably need to sanitize extraSymbols
function getRandomChar(stringA) {
    randNum = Math.round(Math.random() * (stringA.length - 1) );
    
    return stringA[randNum];
}



buttonUser.addEventListener("click", function() {
    generatePassword(20);
} );
const lowerAlpha="abcdefghijklmnopqrstuvwxyz";
const upperAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const extraSymbols=".!@#$%^&*()/"
const buttonUser = document.getElementById("generateButton");


function generatePassword() {
    s
}

//randomly picks a element from one of the strings
function getRandomChar(stringA) {
    randNum = Math.round(Math.random() * stringA.length);
    console.log(stringA[randNum]);
}



buttonUser.addEventListener("click", function() {
    getRandomChar(lowerAlpha);
} );
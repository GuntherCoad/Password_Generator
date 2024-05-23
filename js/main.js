const lowerAlpha="abcdefghijklmnopqrstuvwxyz";
const upperAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const extraSymbols="\.\!\@\#\$\%\^\&\*\(\)\/\-\_";
const buttonUser = document.getElementById("generateButton");
const output = document.getElementById("output");
const passSize = document.getElementById("op5");
const feedbackOutput = document.getElementById("feedback-output");



function generatePassword() {
    randArr = [lowerAlpha, extraSymbols, numbers, upperAlpha];
    password='';
    randArrNum = 0;
    stringLenPass = getPassSize();
    for (let index = 0; index < stringLenPass; index++) {
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

function getPassSize() {
    if(passSize.value == "")
        {
            sizeValidate(true);
        }
    else
    {
        sizeValidate(false);
        return passSize.value;
    }
        
}

function sizeValidate(isNull) {
    if(isNull)
        {
            output.classList.add("has-error");
            output.classList.remove("has-success");

            feedbackOutput.innerHTML = '<p>A size must be entered to generate a password.</p>'
        }
    else
    {
        output.classList.remove("has-error");
        output.classList.add("has-success");
    }
}



buttonUser.addEventListener("click", function() {
    generatePassword();
} );
// "Check the login" https://javascript.info/logical-operators

function webLogin() {
    const user = prompt(`Please enter your Login ID`);
    if (user === `Admin`) {
        const password = prompt(`Please enter your Password`);
        if (password === `TheMaster`) {
            alert(`Welcome!`);
        } else if (password === `` || password === null) {
            alert(`Canceled`);
        } else {
            alert (`Wrong password`);
        }
    } else if (user === `` || user === null) {
        alert(`Canceled`);
    } else {
        alert (`I don't know you`);
    }
}

function quiz() {
    let input = prompt(`What is the "official" name of JavaScript?`);
    (input == `ECMAScript`) ? alert("Right!") : alert("You don't know? ECMAScript!");
}

function sign() {
    const input = prompt("Give me a number");
    if (input > 0) {
        alert("1");
    } else if (input < 0) {
        alert("-1");
    } else if (input == 0) {
        alert("0");
    } else {
        alert("Error, please input numbers only");
    }
}
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
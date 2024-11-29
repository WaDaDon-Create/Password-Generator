function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties () {
    // const lowercase = document.getElementById("lowercase").value;
    // const uppercase = document.getElementById("uppercase").value;
    // const numbers = document.getElementById("numbers").value;
    // const specialChar = document.getElementById("special").value;

    //better way:
    const ids = ["lowercase","uppercase", "numbers", "special"];
    const properties = {};

    for(const id of ids) {
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }

    return properties;
}

function getChars(lowercase) {
    const start = lowercase ? 97 : 65;
    let chars = [];

    for(let i=start; i < start + 26; i++){
        chars.push(String.fromCharCode(i));
    }

    return chars;
}

function getNumbers () {
    const nums = [];

    for (let i = 0; i< 10; i++) {
        nums.push(i);
    }
    return nums;
}

    const lowercaseChars = getChars(true);
    const uppercaseChars = getChars(false);
    const numbers = getNumbers();
    const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];


function generatePassword () {
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    const characters = [];
    if(properties.lowercase)characters.push(...lowercaseChars);
    if(properties.uppercase)characters.push(...uppercaseChars);
    if(properties.numbers)characters.push(...numbers);
    if(properties.special)characters.push(...special);

    if(characters.length === 0) {
        return alert("you must select at least one set of characters.");
    }

    let pwd = [];
    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randomIdx];
        pwd.push(char);
    }
    const pwdStr = pwd.join("");
    document.getElementById("password").innerHTML = "<p>" + pwdStr + "</p>";
}
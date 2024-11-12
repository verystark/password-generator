const btn = document.querySelector("button");
const slider = document.getElementById("myRange");
const output = document.getElementById("myLength");

const lower = document.getElementById("lower");
const upper = document.getElementById("upper");
const numbers = document.getElementById("numbers");
const specialChars = document.getElementById("specialChars");

const filters = [ lower, upper, numbers, specialChars ];

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
    newPassword.value = generatePassword(slider.value)
}

window.onload = () => { newPassword.value = generatePassword(slider.value) };

btn.onclick = () => { newPassword.value = generatePassword(slider.value) };

filters.forEach(i => {
    i.onclick = () => {
        newPassword.value = generatePassword(slider.value)
    };
});

const newPassword = document.getElementById('myInput');
const copyPassword = document.getElementById('copyButton');

copyPassword.addEventListener('click', function() {
    newPassword.select();
    newPassword.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(newPassword.value)
});

function generatePassword(length) {
    let password = ''
    if (filterCharacters().length !== 0) {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * filterCharacters().length);
            password += filterCharacters()[randomIndex]
        }
    }

    return password
}

function filterCharacters() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:",.<>?/`~'
    if (!lower.checked) {
        characters = characters.replace(/[a-z]/g, '');
    }

    if (!upper.checked) {
        characters = characters.replace(/[A-Z]/g, '');
    }

    if (!numbers.checked) {
        characters = characters.replace(/[0-9]/g, '');
    }

    if (!specialChars.checked) {
        specials = '!@#$%^&*()-_=+[]{}|;:",.<>?/`~'
        for (let i in specials) {
            characters = characters.replace(specials[i], '');
        }
    }

    return characters
}
const btn = document.querySelector('button');

btn.onclick = () => {
    newPassword.value = generatePassword(24);
};

const newPassword = document.getElementById('myInput');
const copyPassword = document.getElementById('copyButton');

copyPassword.addEventListener('click', function() {
    newPassword.select();
    newPassword.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(newPassword.value)
});

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:",.<>?/`~'
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]
    }
    return password
}
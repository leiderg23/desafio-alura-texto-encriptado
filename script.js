const inputText = document.getElementById('input-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const outputText = document.getElementById('output-text');
const copyBtn = document.getElementById('copy-btn');

let encryptedText = '';

encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) return;
    encryptedText = encrypt(text);
    outputText.value = encryptedText;
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (!text) return;
    const decryptedText = decrypt(encryptedText);
    outputText.value = decryptedText;
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputText.value);
});

function encrypt(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char);
            encryptedText += alphabet[(index + 3) % 26];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

function decrypt(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char);
            decryptedText += alphabet[(index - 3) % 26];
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}
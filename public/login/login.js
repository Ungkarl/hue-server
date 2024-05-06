document.addEventListener('DOMContentLoaded', () => {
    const encryptedUsername = localStorage.getItem('encryptedUsername');
    const encryptedPassword = localStorage.getItem('encryptedPassword');
    const keyHex = localStorage.getItem('key');
    const ivHex = localStorage.getItem('iv');
    const expiration = localStorage.getItem('expiration');

    if (encryptedUsername && encryptedPassword && keyHex && ivHex && expiration) {
        const now = new Date().getTime();
        if (now <= parseInt(expiration)) {
            const key = forge.util.hexToBytes(keyHex);
            const iv = forge.util.hexToBytes(ivHex);

            const username = decrypt(encryptedUsername, key, iv);
            const password = decrypt(encryptedPassword, key, iv);

            document.querySelector('input[name="username"]').value = username;
            document.querySelector('input[name="password"]').value = password;
        } else {
        
            localStorage.removeItem('encryptedUsername');
            localStorage.removeItem('encryptedPassword');
            localStorage.removeItem('key');
            localStorage.removeItem('iv');
            localStorage.removeItem('expiration');
        }
    }
});

document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    
    const key = forge.random.getBytesSync(16);
    const iv = forge.random.getBytesSync(16);

  
    const encryptedUsername = encrypt(username, key, iv);
    const encryptedPassword = encrypt(password, key, iv);


    const keyHex = forge.util.bytesToHex(key);
    const ivHex = forge.util.bytesToHex(iv);

    const expirationMinutes = 60; 
    const expiration = new Date().getTime() + expirationMinutes * 60 * 1000;

    localStorage.setItem('encryptedUsername', encryptedUsername);
    localStorage.setItem('encryptedPassword', encryptedPassword);
    localStorage.setItem('key', keyHex);
    localStorage.setItem('iv', ivHex);
    localStorage.setItem('expiration', expiration.toString());

    console.log("Login successful");
});

function encrypt(text, key, iv) {
    var cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(text, 'utf8'));
    cipher.finish();

    var encryptedBytes = cipher.output.getBytes();
    var encryptedBase64 = forge.util.encode64(encryptedBytes);

    return encryptedBase64;
}

function decrypt(encryptedBase64, key, iv) {
    var encryptedBytes = forge.util.decode64(encryptedBase64);

    var decipher = forge.cipher.createDecipher('AES-CBC', key);
    decipher.start({ iv: iv });
    decipher.update(forge.util.createBuffer(encryptedBytes));
    decipher.finish();

    var decryptedText = decipher.output.toString('utf8');

    return decryptedText;
}

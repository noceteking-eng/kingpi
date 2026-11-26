// Prototype only: Pi authentication and payments are not connected yet.
const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');
loginBtn.addEventListener('click', () => {
  message.textContent = 'Pi sign-in will be enabled after official developer setup and testing.';
  message.classList.add('show');
  window.setTimeout(() => message.classList.remove('show'), 3200);
});
// Never request or store Pi wallet passphrases or private keys.

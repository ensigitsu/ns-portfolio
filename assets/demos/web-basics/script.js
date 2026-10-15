const nameForm = document.getElementById('name-form');
const firstName = document.getElementById('first-name');
const message = document.getElementById('message');
const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset-button');
let clickCount = 0;

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clickCount += 1;
  counter.textContent = String(clickCount);

  const name = firstName.value.trim();
  if (clickCount >= 5) {
    message.textContent = `Déjà ${clickCount} clics !`;
  } else if (name) {
    message.textContent = `Bravo ${name} !`;
  } else {
    message.textContent = 'Bravo !';
  }
});

resetButton.addEventListener('click', () => {
  clickCount = 0;
  counter.textContent = '0';
  message.textContent = 'Compteur remis à zéro.';
});

const numAInput = document.querySelector('#num-a');
const numBInput = document.querySelector('#num-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

function setResult(text, color) {
  resultDiv.innerText = text;
  resultDiv.style.border = `1px solid ${color}`;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const numA = Number(numAInput.value);
  const numB = Number(numBInput.value);

  setResult('Loading...', 'transparent');

  const res = await fetch('/calc/check', {
    method: 'POST',
    body: JSON.stringify({
      numA,
      numB,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  setResult(
    data.divider ? 'The number B is a divider of the number A' : 'The number B is NOT a divider of the number A',
    data.divider ? 'green' : 'red',
  );
});

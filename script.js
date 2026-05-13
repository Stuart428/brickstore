const product = document.querySelector('#product');
const twofadiv = document.getElementById("twofa");
const twofaCodeElement = document.querySelector("#twofaCode");

const moveNoButton = () => {
  const x = Math.random() * (window.innerWidth - product.offsetWidth);
  const y = Math.random() * (window.innerHeight - product.offsetHeight);

  product.style.position = 'absolute';
  product.style.left = `${x}px`;
  product.style.top = `${y}px`;
};

twofadiv.style.display = 'none';

let currenttwofacode = 615819;


twofaCodeElement.textContent = `Your 2FA code: ${currenttwofacode}`;


setInterval(randomtwofacode, 5000);

function randomtwofacode() {
  currenttwofacode =
    Math.floor(Math.random() * 900000) + 100000;

  twofaCodeElement.textContent =
    `Your 2FA code: ${currenttwofacode}`;
}

product.addEventListener('click', moveNoButton);
product.addEventListener('mouseenter', moveNoButton);

document
  .getElementById("twofaForm")
  .addEventListener('submit', twofaForm);

function clickBuy() {
  console.log("Buy pressed");
  twofadiv.style.display = 'flex';
}

function twofaForm(event) {
  event.preventDefault();

  const codeinput =
    document.getElementById("twofain").value;

  if (Number(codeinput) === currenttwofacode) {
    alert("2FA success!");
    twofadiv.style.display = 'none';
  } else {
    alert("2FA failed!");
    twofadiv.style.display = 'none';
  }
}

const product = document.querySelector('#product');

const moveNoButton = () => {
  var x = Math.random() * (window.innerWidth - product.offsetWidth);
  var y = Math.random() * (window.innerHeight - product.offsetHeight);

  product.style.position = 'absolute';
  product.style.left = `${x}px`;
  product.style.top = `${y}px`;
}

let currenttwofacode = 615819;

window.setInterval(function(){
  randomtwofacode();
}, 2000);

function randomtwofacode()
{
  currenttwofacode = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}

product.addEventListener('click', moveNoButton);
product.addEventListener('mouseenter', moveNoButton);

document.getElementById( "2faForm" ).addEventListener( 'submit', twofaForm);
function clickBuy() 
{
  console.log("Buy pressed");
  
}
function twofaForm() 
{
  let codeinput = document.getElementById("twofain").value;
  if (codeinput == currenttwofacode)
  {
    alert("CONGRATS!!!!!! YOU BOUGHT THE BRICK!!!!");
  }
}
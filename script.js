
const product = document.querySelector('#product');
const twofadiv = document.getElementById("twofa");
const twofaCodeElement = document.getElementById("twofaCode");
const moveNoButton = () => {
  var x = Math.random() * (window.innerWidth - product.offsetWidth);
  var y = Math.random() * (window.innerHeight - product.offsetHeight);

  product.style.position = 'absolute';
  product.style.left = `${x}px`;
  product.style.top = `${y}px`;
}
twofadiv.style.display = 'none'; 
let currenttwofacode = 615819;
document.querySelector('#twofaCode').innerHtml = `Your 2fa code: ${currenttwofacode}`;
window.setInterval(function(){
  randomtwofacode();
}, 2000);

function randomtwofacode()
{
  currenttwofacode = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  document.querySelector('#twofaCode').innerHtml = `Your 2fa code: ${currenttwofacode}`;
}

//product.addEventListener('click', moveNoButton);
//product.addEventListener('mouseenter', moveNoButton);

document.getElementById( "twofaForm" ).addEventListener( 'submit', twofaForm);
function clickBuy() 
{
  console.log("Buy pressed");
  twofadiv.style.display = 'block'; 
  
}
function twofaForm() 
{
  let codeinput = document.getElementById("twofain").value;
  if (codeinput == currenttwofacode)
  {
    alert("CONGRATS!!!!!! YOU BOUGHT THE BRICK!!!!");
    twofadiv.style.display = 'none'; 
  }
  else {
    alert("2fa failed!");
    twofadiv.style.display = 'none'; 
  }
}
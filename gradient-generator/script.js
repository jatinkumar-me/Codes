var color1=document.querySelector('#color-1');
var color2=document.querySelector('#color-2');
var cssOutput=document.querySelector('.cssOutput');
var gradient=document.querySelector('#gradient');

function changeGradient(){
    gradient.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
    
    cssOutput.textContent = gradient.style.background + ";"
}

color1.addEventListener('input', changeGradient);
color2.addEventListener('input', changeGradient);




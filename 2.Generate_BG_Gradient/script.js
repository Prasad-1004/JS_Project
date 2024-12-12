let Btn1 = document.getElementById("btn1");
let Btn2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "rgb(92, 145, 229)";
let rgb2 = "rgb(152, 63, 198)";

const hexavalues = () => {
    let hexa = "0123456789abcdef";
    let colors = "#";
    for(let i=0;i<6;i++) {
        colors = colors + (hexa[Math.floor(Math.random()*16)]);
    }
    return colors;
}

const handleButton1 = () => {
    rgb1 = hexavalues();
    console.log(rgb1);
    Btn1.innerText = rgb1;
    document.body.style.backgroundImage =`linear-gradient(to right, ${rgb1} , ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

const handleButton2 = () => {
    rgb2 = hexavalues();
    console.log(rgb2);
    Btn2.innerText = rgb2;
    document.body.style.backgroundImage =`linear-gradient(to right, ${rgb1} , ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

Btn1.addEventListener('click', handleButton1);
Btn2.addEventListener('click', handleButton2);
copyDiv.addEventListener('click', ()=> {
    navigator.clipboard.writeText(copyDiv.innerText);
})
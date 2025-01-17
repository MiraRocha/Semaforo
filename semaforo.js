const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLight = (event) => {
    turnOn[event.target.id]();
}


const changecolor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = 'red';
    turnOn[color]();
}
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => setInterval(changecolor, 1000)

}

buttons.addEventListener('click', trafficLight);
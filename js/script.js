// Declaring and Assigning Buttons
let btnWhite = document.querySelector('#btn-white');
let btnRed = document.querySelector('#btn-red');
let btnYellow = document.querySelector('#btn-yellow');
let btnGreen = document.querySelector('#btn-green');
let dropDown = document.querySelector('select');

// Applying Click Events to Buttons
btnWhite.addEventListener('click', () => {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    document.body.style.transition = '0.3s ease-in-out';
})

btnRed.addEventListener('click', () => {
    document.body.style.background = 'red';
    document.body.style.color = 'white';
    document.body.style.transition = '0.3s ease-in-out';
})

btnYellow.addEventListener('click', () => {
    document.body.style.background = 'yellow';
    document.body.style.color = 'black';
    document.body.style.transition = '0.3s ease-in-out';
})

btnGreen.addEventListener('click', () => {
    document.body.style.background = 'green';
    document.body.style.color = 'white';
    document.body.style.transition = '0.3s ease-in-out';
})

dropDown.addEventListener('change', function () {
    const color = this.value;
    // With Switch Statement
    switch (color) {
        case 'red':
            document.body.style.background = 'red';
            document.body.style.color = 'white';
            document.body.style.transition = '0.3s ease-in-out';
            break;
        case 'yellow':
            document.body.style.background = 'yellow';
            document.body.style.color = 'black';
            document.body.style.transition = '0.3s ease-in-out';
            break;
        case 'green':
            document.body.style.background = 'green';
            document.body.style.color = 'white';
            document.body.style.transition = '0.3s ease-in-out';
            break;
        default:
            document.body.style.background = 'white';
            document.body.style.color = 'black';
            document.body.style.transition = '0.3s ease-in-out';
    }
})

// With if Else Statement
// if (color === 'default') {
//     document.body.style.background = 'white';
// }
// else {
//     document.body.style.background = color;
// }
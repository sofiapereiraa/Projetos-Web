const multi = document.querySelector('#multi');
const num = document.querySelector("#num");
const num2 = document.querySelector('#num2');

const multiOp = document.querySelector('#op');

const createTable = (number1, number2) => {
    multiOp.innerHTML = '';

    for (let i = 1; i <= number2; i++) {
        const result = number1 * i;

        const div = document.createElement('div');
        div.textContent = `${number1} x ${i} = ${result}`;

        multiOp.appendChild(div);
    }
};

multi.addEventListener('submit', (e) => {
    e.preventDefault();

    const number1 = +num.value;
    const number2 = +num2.value;

    if (!number1 || !number2) return;

    console.log(number1, number2);

    createTable(number1, number2);

});



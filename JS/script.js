const button = document.querySelector('#calcular');


const mostrarNaTela = () => {

    const peso = parseFloat(document.querySelector('#peso').value);
    const altura = parseFloat(document.querySelector('#altura').value);
    const resultadoTxt = document.querySelector('.resultado-linha');
    const resultadoValue = document.querySelector('.result');

    if (isNaN(peso) || isNaN(altura)) {

        resultadoTxt.textContent = 'Preencha todos os campos com valores numéricos.';
        resultadoTxt.style.color = '#cbd5e1';
        resultadoTxt.style.display = 'block';
        resultadoValue.textContent = '';

    } else {   
   
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificar = document.querySelector('.classificar');

        if (valorIMC < 18.5) {
            resultadoValue.textContent = `${valorIMC}`;
            classificar.textContent = 'Você está abaixo do peso';
        } else if (valorIMC >= 18.5 && valorIMC < 25) {
            resultadoValue.textContent = `${valorIMC}`;
            classificar.textContent = 'Peso normal';
        } else if (valorIMC >= 25 && valorIMC < 30) {
            resultadoValue.textContent = `${valorIMC}`;
            classificar.textContent = 'Sobrepeso';
        } else if (valorIMC >= 30 && valorIMC < 35) {
            resultadoValue.textContent = `${valorIMC}`;
            classificar.textContent = 'Obesidade Grau 1';
        } else if (valorIMC >= 35 && valorIMC < 40) {
            resultadoValue.textContent = `${valorIMC}`;
            classificar.textContent = 'Obesidade Grau 2';
        } else {
            resultadoValue.textContent = `${valorIMC}`;
            classificar.textContent = 'Obesidade Grau 3. Cuidado.';
        }

        resultadoTxt.style.display = 'block';

    }

};

const buttonClick = () => {
    button.addEventListener('click', mostrarNaTela);
};

buttonClick()
function calc_imc() {
    var peso = parseFloat(document.getElementById('ent_peso').value);
    var altura = parseFloat(document.getElementById('ent_alt').value);

    var imc = peso / (altura * altura);

    if (imc <= 16.99) {
        document.getElementById('res_imc').textContent = 'Índice IMC: Muito abaixo do peso';
    } else if (imc >= 17 && imc <= 18.49) {
        document.getElementById('res_imc').textContent = 'Índice IMC: Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.99) {
        document.getElementById('res_imc').textContent = 'Índice IMC: Peso normal';
    } else if (imc >= 25 && imc <= 29.99) {
        document.getElementById('res_imc').textContent = 'Índice IMC: Acima do peso';
    } else if (imc >= 30 && imc <= 34.99) {
        document.getElementById('res_imc').textContent = 'Índice IMC: Obesidade grau 1';
    } else if (imc >= 35 && imc <= 40) {
        document.getElementById('res_imc').textContent = 'Índice IMC: Obesidade grau 2';
    } else if (imc > 40) {
        document.getElementById('res_imc').textContent = 'Índice IMC: Obesidade grau 3';
    }

    document.getElementById('result').textContent = imc.toFixed(2);
}
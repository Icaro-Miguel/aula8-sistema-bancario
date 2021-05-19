 let saldo, valor;

function compra (saldo, valor) {
    return saldo - valor
}

let conta = compra(prompt('Digite seu saldo: '), prompt('Digite o valor da sua compra: '));


if (saldo > valor) {
    alert(` compra efetuada! saldo restante:  ${conta}.`);
}

 else if (conta < 0) {   
    alert('Saldo insuficiente.');

} else {
    alert(`A compra efetuada!  saldo restante: ${conta}.`);
}

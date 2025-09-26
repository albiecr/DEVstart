/*
 * --------------------------------------------------------------------------------
 * NOME DO PROJETO: Calculadora
 * --------------------------------------------------------------------------------
 * Neste projeto, você irá completar as quatro funções existentes na calculadora. 
 * Na coluna à direita da tela, você poderá conferir a calculadora em funcionamento.
 * Lembre-se de que as operações só darão certo se você completar o código corretamente.
 * DESCRIÇÃO:
 * As quatro funções da calculadora já foram criadas: soma, subtrai, multiplica e divide.
 * Insira dentro de cada função o código para fazê-la retornar o cálculo correto.
 * Não basta escrever a operação +,-,/ ou *, é necessário usar a palavra-chave return
 * Conclua o código e experimente a calculadora que você acabou de configurar!
 * --------------------------------------------------------------------------------
 */

function soma(a,b){
    return a + b
}

function subtrai(a,b){
    return a - b
}

function multiplica(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
	<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
		<h2>Calculadora</h2>
		Valor 1: <input id="dvInput1" type="number" placeholder="0"><br><br>
		Valor 2: <input id="dvInput2" type="number" placeholder="0"><br><br>
		Operação:
		<button type="button" onclick="dvCalcular(OPERACAO_SOMA)">+</button>&nbsp;
		<button type="button" onclick="dvCalcular(OPERACAO_SUBTRACAO)">-</button>&nbsp;
		<button type="button" onclick="dvCalcular(OPERACAO_MULTIPLICACAO)">*</button>&nbsp;
		<button type="button" onclick="dvCalcular(OPERACAO_DIVISAO)">/</button><br><br>
		Resultado: <span id="dvResultadoCalculo" style="border: solid 1px #aaa; padding:3px;">0</span>
	</div>
`);

const OPERACAO_SOMA = 1;
const OPERACAO_SUBTRACAO = 2;
const OPERACAO_MULTIPLICACAO = 3;
const OPERACAO_DIVISAO = 4;

function dvCalcular(dvOperacao) {
  let dvValorOp1 = Number(document.querySelector("#dvInput1").value);
  let dvValorOp2 = Number(document.querySelector("#dvInput2").value);
  let dvResult = document.querySelector("#dvResultadoCalculo");

  switch (dvOperacao) {
    case OPERACAO_SOMA:
      dvResult.innerHTML = soma(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_SUBTRACAO:
      dvResult.innerHTML = subtrai(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_MULTIPLICACAO:
      dvResult.innerHTML = multiplica(dvValorOp1, dvValorOp2);
      break;
    case OPERACAO_DIVISAO:
      dvResult.innerHTML = divide(dvValorOp1, dvValorOp2);
      break;
  }
}
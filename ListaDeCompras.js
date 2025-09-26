/*
 * --------------------------------------------------------------------------------
 * NOME DO PROJETO: Lista de Compras
 * --------------------------------------------------------------------------------
 * Este projeto representa um futuro pedaço de um aplicativo de compras.
 * Imagine que, ao clicar sobre botões + e -, aumenta e diminui respectivamente
 * o número de itens que o usuário deseja comprar.
 * DESCRIÇÃO:
 * Altere a função obtenhaMensagem de modo que ela retorne uma string diferente para cada situação abaixo:
 * Se o parâmetro valor for menor que 0 (por exemplo, -1, -2 etc.), retorne a mensagem: "Número inválido"
 * Se o parâmetro valor for 0, retorne a mensagem: "Você não tem nenhum item em sua lista de compras"
 * Se o parâmetro valor for 1, retorne a mensagem: "Você tem 1 item em sua lista de compras"
 * Se o parâmetro valor for maior que 1, retorne a mensagem: "Você tem mais de 1 item em sua lista de compras"
 * Para mostrar a mensagem na tela, você deve inserir uma string no retorno da função obtenhaMensagem().
 * Dica: cuidado ao fazer comparações no seu código. Use três sinais de igual (===) para isso, em vez de um igual simples (=).
 * --------------------------------------------------------------------------------
 */

function obtenhaMensagem(valor) {
    console.log(valor)
    if (valor < 0){
      return "Número inválido"
    }
    if (valor === 0){
      return "Você não tem nenhum item em sua lista de compras"
    }
    if (valor === 1){
      return "Você tem 1 item em sua lista de compras"
    }
      if (valor > 1){
      return "Você tem mais de 1 item em sua lista de compras"
      }
}


// ---- Modifique apenas o código que está acima desta linha ----
document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
	<h2>Lista de Compras</h2>
    <button id="dv-sub-item" class="btn btn-accent"
		> - </button>
    <input type="number" id="dv-items-count" value="0" 
		readonly class="textbox" />
    <button id="dv-add-item" class="btn btn-accent"
		> + </button>
    <p id="dv-message">
		</p>
</div>
`);

let itemsCount = document.querySelector("#dv-items-count");

function dvRenderizaMensagem() {
    let value = Number.parseInt(itemsCount.value, 10)
    let message = obtenhaMensagem(value)
    document.querySelector("#dv-message").textContent = message
}

document.querySelector("#dv-add-item").addEventListener("click", () => {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) + 1;
    dvRenderizaMensagem();
});

document.querySelector("#dv-sub-item").addEventListener("click", () => {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) - 1;
    dvRenderizaMensagem();
});
/*
 * --------------------------------------------------------------------------------
 * NOME DO PROJETO: Aplicativo de Nomes
 * --------------------------------------------------------------------------------
 * Complete as funções fornecidas para que possamos simular algumas variações de nome.
 * Complete as funções que foram solicitadas.
 * --------------------------------------------------------------------------------
 */

function obtenhaNumeroDeCaracteres(nome) {
    return nome.length // retorna o número de caracteres em: nome

}

function obtenhaNomeMinusculo(nome) {
    return nome.toLowerCase() // retorna o nome todo em letras minúsculas (exemplo: "ABC" se torna "abc")

}

function obtenhaNomeMaiusculo(nome) {
    return nome.toUpperCase() // retorna o nome todo em letras maiúsculas (exemplo: "abc" se torna "ABC")

}

// --- Agora, vamos testar as funções ---

// 1. Primeiro, definimos uma variável com um nome para usar nos testes.
const meuNome = "Ada Lovelace";

// 2. Agora, chamamos cada função e guardamos o resultado em novas variáveis.
const totalDeCaracteres = obtenhaNumeroDeCaracteres(meuNome);
const nomeMinusculo = obtenhaNomeMinusculo(meuNome);
const nomeMaiusculo = obtenhaNomeMaiusculo(meuNome);

// 3. Finalmente, usamos console.log() para mostrar os resultados.
console.log("Nome Original:", meuNome);
console.log("Número de Caracteres:", totalDeCaracteres);
console.log("Nome em Minúsculas:", nomeMinusculo);
console.log("Nome em Maiúsculas:", nomeMaiusculo);
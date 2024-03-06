function inverterString(str) {
    let novaString = '';
    // Itera sobre a string da última posição até a primeira
    for (let i = str.length - 1; i >= 0; i--) {
        // Concatena cada caractere na nova string
        novaString += str[i];
    }
    return novaString;
}

// String de exemplo
const stringOriginal = "Olá, mundo!";

// Chamada da função para inverter a string
const stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);

/*
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/

const buscarPalavrasSemelhantes = (stringDeFiltro = "", arrayDeStrings = []) => {
    let palavrasFiltradas = [];
    // Iterando pelo array de string
    for (let i = 0; i < arrayDeStrings.length; i++) {
        let stringAtual = arrayDeStrings[i];

        if (stringAtual.includes(stringDeFiltro))
            palavrasFiltradas.push(stringAtual);
    }

    return palavrasFiltradas;
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));
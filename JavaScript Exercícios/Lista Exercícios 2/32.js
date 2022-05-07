/*
    recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) // retornará { nome: "Mariana", media: 7.875 }
*/

function receberMelhorEstudante(objeto) {
    let mediaDosAlunos = [];

    for (var estudante in objeto) {
        let notasDoAlunoAtual = Object.values(objeto[estudante]);
        
        // Pegando a media do aluno[i]
        let mediaDoAluno = 0;
        for (let i = 0; i < notasDoAlunoAtual.length; i++) {
            mediaDoAluno += notasDoAlunoAtual[i];

            if (i == (notasDoAlunoAtual.length - 1))
                mediaDoAluno = (mediaDoAluno / notasDoAlunoAtual.length);
        }
        
        mediaDosAlunos.push({nome: estudante, media: mediaDoAluno});
        mediaDosAlunos.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media);
    }
    
    let melhorEstudante = mediaDosAlunos[0];
    return melhorEstudante;
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))
function criaAluno(nome, idade, turma) {
  return {
    exibeAluno: function exibeAluno() {
      const span = document.querySelector(".divAluno");
      const aluno = document.createElement("span");
      aluno.innerHTML = `Nome do aluno ${nome} a idade é ${idade} e está na turma ${turma}</br>`;
      span.appendChild(aluno);
    },
  };
}

const Aluno1 = criaAluno("José", 20, "6A", "Masculino");
Aluno1.exibeAluno();
const Aluno2 = criaAluno("Pedro", 25, "6A", "Feminino");
Aluno2.exibeAluno();

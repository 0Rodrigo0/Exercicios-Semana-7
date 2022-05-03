//objeto com função construtora

function Aluno(nome, idade, turma) {
  this.nome = nome;
  this.idade = idade;
  this.turma = turma;
  this.imprimeAluno = function () {
    const span = document.querySelector(".funcaoConstrutoraAluno");
    const aluno = document.createElement("span");
    aluno.innerHTML = `Nome do aluno é ${this.nome} a idade é ${this.idade} e está na turma ${this.turma}</br></br>`;
    span.appendChild(aluno);
  };
}

const aluno1 = new Aluno("João", 25, "7A");

aluno1.imprimeAluno();

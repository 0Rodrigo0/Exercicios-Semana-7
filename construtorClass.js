// criando por classe, pode chamar de ourto arquivo

class Aluno {
  constructor(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }
  imprimeAluno() {
    const span = document.querySelector(".funcaoConstrutoraAluno");
    const aluno = document.createElement("span");
    aluno.innerHTML = `Nome do aluno é ${this.nome} a idade é ${this.idade} e está na turma ${this.turma}</br></br>`;
    span.appendChild(aluno);
  }
}

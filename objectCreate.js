//modelo object.create

const alunoModelo = {
  nome: "",
  idade: null,
  turma: "",
  alunoToString: function () {
    const span = document.querySelector(".objectCreate");
    const aluno = document.createElement("span");
    aluno.innerHTML = `Nome: ${this.nome} Idade: ${this.idade} Turma: ${this.turma}</br></br>`;
    span.appendChild(aluno);
  },
};
const alunoLuis = Object.create(alunoModelo, {
  nome: {
    value: "Luis Carlos Elias",
    writable: true,
    configurable: true,
    enumerable: true,
  },
  idade: {
    value: 444,
  },
  turma: {
    value: "Senior",
  },
});
alunoLuis.alunoToString();

console.log(alunoLuis);

alunoLuis.nome = "Luiz Carlos";
alunoLuis.idade = 55;

alunoLuis.alunoToString();

delete alunoLuis.nome;
alunoLuis.alunoToString();

delete alunoLuis.turma;
alunoLuis.alunoToString();

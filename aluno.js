let nomeAluno1 = "José";
let idadeAluno1 = 20;
let turmaAluno1 = "6A";
let sexoAluno1 = "Masculino";
console.log(
  "Nome do aluno $(nomeAluno1) a idade é $(idadeAluno1) está na turma $(turmaAluno1) e é do sexo $(sexoAluno1)"
);

const span = document.querySelector(".span");
const text = document.createElement("span");
text.innerHTML = `Nome do aluno ${nomeAluno1} a idade é ${idadeAluno1} está na turma ${turmaAluno1} e é do sexo ${sexoAluno1}`;
span.appendChild(text);

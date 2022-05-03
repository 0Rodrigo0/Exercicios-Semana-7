function criaProfessor(nome, idade, matéria) {
  return {
    mostraProfessor: function exibeProfessor() {
      const span = document.querySelector(".divProfessor");
      const professor = document.createElement("span");
      professor.innerHTML = `Nome do professor é ${nome}, idade é ${idade}, da aula de ${matéria}</br></br>`;
      span.appendChild(professor);
    },
  };
}

const professor1 = criaProfessor("José", 50, "Matemática");
professor1.mostraProfessor();
const professor2 = criaProfessor("Pedro", 60, "Português");
professor2.mostraProfessor();

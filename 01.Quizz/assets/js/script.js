/**
 * ALGORITHME
 * - Recuperer les données au click
 * - Comparer les resultats.
 * - Afficher des phrases en fonction des resultats.
 * - Changer la couleur des blocks + animation en fonction des resulats.
 */
const form = document.querySelector(".form-quizz");
const questionsBlock = form.querySelectorAll(".question-block");
let tableauResult = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 1; i < questionsBlock.length + 1; i++) {
    const formResponse = form.querySelector(`input[name="q${i}"]:checked`);
    tableauResult.push(formResponse.value);
  }
  console.log(tableauResult);
  tableauResult.length = 0;
});

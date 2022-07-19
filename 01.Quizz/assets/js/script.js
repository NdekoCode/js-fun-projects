/**
 * ALGORITHME
 * - Recuperer les données au click
 * - Comparer les resultats.
 * - Afficher des phrases en fonction des resultats.
 * - Changer la couleur des blocks + animation en fonction des resulats.
 */
const form = document.querySelector(".form-quizz");
const questionsBlock = form.querySelectorAll(".question-block");
const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔", "✨", "👀", "😭", "👎"];
const titreResultat = document.querySelector(".resultats h2");
const textResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const verifTableau = [];
let tableauResult = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 1; i < questionsBlock.length + 1; i++) {
    const formResponse = form.querySelector(`input[name="q${i}"]:checked`);
    tableauResult.push(formResponse.value);
  }
  verifFunc(tableauResult);
  tableauResult.length = 0;
});

/**
 * @description Prend les resultats du tableau et les compares les reponses corrects
 * @author NdekoCode
 * @param {*} arrResults
 */
function verifFunc(arrResults) {
  for (let a = 0; a < responses.length; a++) {
    if (arrResults[a] === responses[a]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  showResult(verifTableau);
  colorFunction(verifTableau);
  verifTableau.length = 0;
}
function showResult(arrVerifResult) {
  const nbFautes = arrVerifResult.filter((el) => el !== true).length;

  switch (nbFautes) {
    case 0:
      titreResultat.textContent = `${emojis[0]} Bravo c'est un sans faute ! ${emojis[0]}`;
      aideResultat.textContent = "";
      textResultat.textContent = "5/5";
      break;
    case 1:
      titreResultat.textContent = `${emojis[1]} Vous y etes presque ! ${emojis[1]}`;
      aideResultat.textContent =
        "Rententez une autre reponse pour la case rouge, puis re-validez !";
      textResultat.textContent = "4/5";
      break;
    case 2:
      titreResultat.textContent = `${emojis[1]} Encore un effort ... ${emojis[2]}`;
      aideResultat.textContent =
        "Rententez une autre reponse dans les cases rouge, puis re-validez !";
      textResultat.textContent = "3/5";
      break;
    case 3:
      titreResultat.textContent = `${emojis[2]} Il reste quelques erreurs ! ${emojis[3]}`;
      aideResultat.textContent =
        "Rententez une autre reponse dans les cases rouge, puis re-validez !";
      textResultat.textContent = "2/5";
      break;
    case 4:
      titreResultat.textContent = `${emojis[3]} Peut mieux faire ! ${emojis[3]}`;
      aideResultat.textContent =
        "Rententez une autre reponse dans les cases rouge, puis re-validez !";
      textResultat.textContent = "1/5";
      break;
    default:
      "Woops, cas inattendu.";
  }
}
function colorFunction(tabBooleanValues) {
  for (let j = 0; j < tabBooleanValues.length; j++) {
    if (tabBooleanValues[j] === true) {
      questionsBlock[j].style.backgroundColor = "lightgreen";
    } else {
      questionsBlock[j].style.backgroundColor = "#ffb8b8";
      questionsBlock[j].classList.add("echec");
      setTimeout(() => questionsBlock[j].classList.remove("echec"), 1000);
    }
  }
}
questionsBlock.forEach((block) =>
  block.addEventListener("click", (evt) => {
    block.style.backgroundColor = "#fff";
  })
);

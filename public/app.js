let quiz = new Quiz();
let question1 = new Question('Does the sun burn?', 'Yes', 'No', 'choice0');
let question2 = new Question('What year did Columbus sail the Ocean Blue?', '1324', '1492', 'choice1');
let question3 = new Question('Have the cubs won a world series?', 'Yes', 'No', 'choice0');


quiz.add(question1);
quiz.add(question2);
quiz.add(question3);

let choice0 = document.getElementById('choice0');
let choice1 = document.getElementById('choice1');
let progress = document.getElementById('progress');
let questionHeader = document.getElementById('question');
quiz.renderHTML(questionHeader);
quiz.renderHTML(choice0);
quiz.renderHTML(choice1);
quiz.renderHTML(progress);

let guessButton = document.getElementById('guess0');
guessButton.onclick = function() {
  quiz.setProgress();
  quiz.renderHTML(questionHeader);
  quiz.renderHTML(choice0);
  quiz.renderHTML(choice1);
  quiz.renderHTML(progress);

  console.log(quiz.checkAnswer());
}

let guessButton1 = document.getElementById('guess1');
guessButton1.onclick = function() {
  quiz.setProgress();
  quiz.renderHTML(questionHeader);
  quiz.renderHTML(choice0);
  quiz.renderHTML(choice1);
  quiz.renderHTML(progress);

  console.log(quiz.checkAnswer());
}


console.log(quiz);

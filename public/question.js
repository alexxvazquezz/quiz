function Question(question, answer1, answer2, choice) {
  QuizUi.call(this, question, answer1, answer2);
  this.choice0 = 0;
  this.choice1 = 0;

  if (choice === 'choice0') {
    this.choice0 = 1;
  }
  if (choice === 'choice1') {
    this.choice1 = 1;
  }
}

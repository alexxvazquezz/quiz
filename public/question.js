let Question = function(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.checkAnswer = function(choice) {
  return choice === this.answer;
}

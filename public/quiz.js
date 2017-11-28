var Quiz = function(question) {
  this.questions = questions;
  this.score = 0;
  this.questionsIndex = 0;
}


Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.questionsIndex];
}

Quiz.prototype.quizEnded = function() {
  return this.questionsIndex === this.questions.length;
}

Quiz.prototype.checkGuess = function(guess) {
  if(this.getCurrentQuestion().checkAnswer(guess)) {
    this.score++;
  }
  this.questionsIndex++;
}

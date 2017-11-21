function Quiz() {
  this.questions = [];
  this.questionsIndex = 0;
  this.progress = 1;
  this.score = 0;
}

Quiz.prototype = Object.create(QuizUi.prototype);

Quiz.prototype.add = function(question, choice) {
  this.questions.push(question);
}


Quiz.prototype.renderHTML = function(html) {
  var currentQuestion = this.questions[this.questionsIndex];
  if (html.id === 'question') {
    this.setHTML(html, currentQuestion.question);
  }
  if (html.id === 'choice0') {
    this.setHTML(html, currentQuestion.answer1);
  }

  if (html.id === 'choice1') {
    this.setHTML(html, currentQuestion.answer2);
  }

  if (html.id === 'progress') {
    this.setHTML(html, 'Question ' + this.progress +
  ' of ' + this.questions.length);
  }
}

Quiz.prototype.setProgress = function() {
  this.progress++;
  this.questionsIndex++;
  if (this.progress > this.questions.length) {
    this.progress = 1;
  }

  if (this.questionsIndex === this.questions.length) {
    this.questionsIndex = 0;
  }

}

Quiz.prototype.checkAnswer = function() {
  var currentQuestion = this.questions[this.questionsIndex];
  if (currentQuestion.choice0 === 1 ) {
    return true;
  }

  if (currentQuestion.choice1 === 1) {
    return true;
  }
}

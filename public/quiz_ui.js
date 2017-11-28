let QuizUi = {
  nextQuestion: function() {
    if (quiz.quizEnded()) {
      this.gameOver();
    }
    this.printQuestion();
    this.printChoices();
    this.printProgress();
  },
  printQuestion: function() {
    let question = quiz.getCurrentQuestion().text;
    this.print(question, 'question')
  },
  printChoices: function() {
    let choices = quiz.getCurrentQuestion().choices;
    for (let i = 0; i < choices.length; i++) {
      this.print(choices[i], 'choice' + i);
      this.guessHandler(choices[i], 'guess' + i);
    }
  },
  printProgress: function() {
    let progress = quiz.questionsIndex + 1;
    this.print('Question ' + progress + ' of ' + quiz.questions.length, 'progress')
  },

  guessHandler: function(guess, id) {
      let button = document.getElementById(id)
      button.onclick = function() {
        quiz.checkGuess(guess);
        QuizUi.nextQuestion();
      }
  },

  gameOver: function() {
    let gameOverText = 'Game Over! You scored: ' + quiz.score;
    this.print(gameOverText, 'quiz')
  },
  print: function(text, id) {
    document.getElementById(id).innerHTML = text;
  }
}

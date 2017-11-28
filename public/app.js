//create questions

let questions = [
  new Question('Does the PS4 Pro have a USB 3 port?', ['Yes', 'No'], 'Yes' ),
  new Question('How many eggs should you use in a flan?', ['21', '10'],'10')
]

// Create quiz

let quiz = new Quiz(questions);

// Initiate Quiz Ui
console.log(quiz.getCurrentQuestion().choices)
QuizUi.nextQuestion();

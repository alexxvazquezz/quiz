function QuizUi(question, answer1, answer2, progress) {
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.progress = progress;
}


QuizUi.prototype.setHTML =  function(doc, html) {
    doc.innerHTML = html;
}

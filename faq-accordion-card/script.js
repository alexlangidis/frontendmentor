
const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    // Check if the question has the 'active' class
    if (question.classList.contains('active')) {
      // If it does, remove the 'active' class from the question and answer elements
      question.classList.remove('active');
      answers[index].classList.remove('active');
    } else {
      // If it doesn't, add the 'active' class to the question and answer elements
      questions.forEach((q) => q.classList.remove('active'));
      answers.forEach((a) => a.classList.remove('active'));
      question.classList.add('active');
      answers[index].classList.add('active');
    }
  });
});

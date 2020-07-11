const questions = (question, choice1, choice2, choice3, choice4, answer) => {
    return {
        question: question,
        choice1: choice1,
        choice2: choice2,
        choice3: choice3,
        choice4: choice4,
        answer: answer,
    }
};

const question1 = questions('Which of these is not a way to set a variable?', 'var', 'let', 'const', 'make', 'make');
const question2 = questions('Which of these affects an HTML table?', '<tr>', '<thead>', '<tableEnd', '<td>', '<tableEnd>');
const question3 = questions('What is the most current version of HTML?', 'HTML1', 'HTML5', 'HTML9', 'HTML12', 'HTML5');
const question4 = questions()


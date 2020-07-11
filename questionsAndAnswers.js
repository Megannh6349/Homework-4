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
const question4 = questions('How hard did Megan and Carlos work on this?', 'Not hard at all', 'They just copied the whole thing', 'Barely tried', 'Bro we worked so hard on this you have no idea', 'Bro we worked so hard on this you have no idea');
const question5 = questions('What is the correct way to use an ID in HTML/CSS?', '#id', '$id', '.id', '?id', '#id');
const question6 = questions('What is the correct way to use a class in HTML/CSS?', '#class', '$class', '.class', '?class', '.class');
const question7 = questions('Which of these would NOT set a color in HTML/CSS?', '#000000', 'black', 'rgb(255, 99, 71)', '@2', '@2');
const question8 = questions('What does HTML stand for?', 'Hypertext Markup Language', 'Hydrotext Manipulation Language', 'Home Text Manuscript Learning', 'Holy Trout, My Lentils!', 'Hypertext Markup Language');
const question9 = questions('Which tag has the largest heading?', 'h1', 'h2', 'mega-h', 'hINFINITY', 'h1');
const question10 = questions('Which HTML element do we store JavaScript in?', '<script>', '<js>', '<javascript>', '<scripts>', '<script>');



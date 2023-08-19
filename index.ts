
import inquirer from "inquirer";
import chalk from "chalk";

const questions = [
    {
        question: "What is the first atomic Islamic country?",
        answer: "Pakistan"
    },
    {
        question: "What is 11 + 11?",
        answer: "22"
    },
    {
        question: "What is the king of fruit?",
        answer: "Mango"
    },
    {
        question: "What is 1 + 1?",
        answer: "2"
    },
    {
        question: "Who is the ex-prime minister of Pakistan?",
        answer: "Imran Khan"
    }
];

async function Quiz() {
    const userAnswers = await inquirer.prompt(
        questions.map(question => ({
            name: question.question,
            type: "input",
            message: question.question
        }))
    );

    const score = calculateScore(questions, userAnswers);
    console.log(chalk.yellow("Quiz Score:", score));
    displayAnswers(questions, userAnswers);
}

function calculateScore(questions: any[], userAnswers: any): number {
    let score = 0;

    questions.forEach(question => {
        if (userAnswers[question.question] === question.answer) {
            score++;
        }
    });

    return score;
}

function displayAnswers(questions: any[], userAnswers: any) {
    console.log("\nQuiz Answers:");
    questions.forEach(question => {
        const userAnswer = userAnswers[question.question];
        const isCorrect = userAnswer === question.answer ? "Correct" : "Incorrect";
        console.log(`Q: ${question.question}`);
        console.log(chalk.bgWhite(`Your Answer: ${userAnswer}`));
        console.log(chalk.bgGreen(`Correct Answer: ${question.answer}`));
        console.log(chalk.bgRed(`Result: ${isCorrect}\n`));
    });
}

Quiz();

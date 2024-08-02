#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.bold.whiteBright.underline(`\n\tQUIZ GAME:`));


let marks: number = 0;


let questions = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: (chalk.bold.italic.yellowBright("\nFor which club did Cristiano Ronaldo win his first UEFA Champions League title? ")),
        choices: [`Manchester United`, `Real Madrid`, `Juventus`, `Al Nassr`]
    },
    {
        name: "question2",
        type: "list",
        message: (chalk.bold.italic.yellowBright("\nHow many Ballon d'Or awards has Cristiano Ronaldo won as of 2024? ")),
        choices: [`5`, `6`, `7`, `8`]
    },
    {
        name: "question3",
        type: "list",
        message: (chalk.bold.italic.yellowBright("\nCristiano Ronaldo became the all-time leading goal scorer in international football by surpassing which player? ")),
        choices: [`Lionel Messi`, `Ali Daei`, `Thierry Henry`, `Miroslav Klose`]
    },
    {
        name: "question4",
        type: "list",
        message: (chalk.bold.italic.yellowBright("\nIn which year did Cristiano Ronaldo transfer from Manchester United to Real Madrid?")),
        choices: [`2006`, `2008`, `2009`, `2010`]
    },
    {
        name: "question5",
        type: "list",
        message: (chalk.bold.italic.yellowBright("\nWho is the Greatest Of All Time ? ")),
        choices: [`Lionel Messi`, `Mbappe`, `Cristiano Ronaldo`, `Neymar Jr.`]
    }
]);

if (questions.question1 == `Manchester United`) {
    console.log(chalk.bold.italic.greenBright(`\nQ1: Correct!`));
    marks++;
    console.log(chalk.bold.italic.magentaBright(`Marks: ${marks}`));

} else {
    console.log(chalk.bold.italic.redBright(`\nQ1: Incorrect!`));
    console.log(chalk.bold.italic.redBright(0));

}

if (questions.question2 == `5`) {
    console.log(chalk.bold.italic.greenBright(`\nQ2: Correct!`));
    marks++;
    console.log(chalk.bold.italic.magentaBright(`Marks: ${marks}`));
} else {
    console.log(chalk.bold.italic.redBright(`\nQ2: Incorrect!`));
    console.log(chalk.bold.italic.redBright(0));
}

if (questions.question3 == `Ali Daei`) {
    console.log(chalk.bold.italic.greenBright(`\nQ3: Correct!`));
    marks++;
    console.log(chalk.bold.italic.magentaBright(`Marks: ${marks}`));
} else {
    console.log(chalk.bold.italic.redBright(`\nQ3: Incorrect!`));
    console.log(chalk.bold.italic.redBright(0));
}

if (questions.question4 == `2009`) {
    console.log(chalk.bold.italic.greenBright(`\nQ4: Correct!`));
    marks++;
    console.log(chalk.bold.italic.magentaBright(`Marks: ${marks}`));
} else {
    console.log(chalk.bold.italic.redBright(`\nQ4: Incorrect!`));
    console.log(chalk.bold.italic.redBright(0));
}

if (questions.question5 == `Cristiano Ronaldo`) {
    console.log(chalk.bold.italic.greenBright(`\nQ5: Correct!`));
    marks++;
    console.log(chalk.bold.italic.magentaBright(`Marks: ${marks}`));
} else {
    console.log(chalk.bold.italic.redBright(`\nQ5: Incorrect!`));
    console.log(chalk.bold.italic.redBright(0));
}


if (marks == 5) {
    console.log(chalk.bold.italic.blueBright(`\nCongratulations! You guessed all correct.`));
    console.log(chalk.bold.italic.blueBright(`\nMarks: ${marks}`));
} else {
    console.log(chalk.bold.italic.blueBright(`\nTotal Marks: ${marks}`));
    console.log(chalk.bold.italic.magentaBright(`Better Luck Next Time :)`));
};
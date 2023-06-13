const fs =require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message:'What is your logo text?',
        
    },
    {
        type: 'input',
        name: 'textcolor',
        message:'What is the text color for your logo?',

    },
    {
        type: 'list',
        name: 'shape',
        message:'What is the shape for your logo?',
        choices: ['square', 'circle', 'triangle'], 
    },
    {
        type: 'input',
        name: 'shapecolor',
        message:'What is the shape color for your logo?',
    },
];

function generateSVG() {
    inquirer.prompt(questions).then((answers) => { 
        console.log(answers);
} 
